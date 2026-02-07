import { axiosClient } from "@/Services/GlobalApi";
import { useSSO, useUser } from "@clerk/clerk-expo";
import * as AuthSession from "expo-auth-session";
import { router, useNavigation } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useCallback, useEffect } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/* ---------------- Browser warmup (Android) ---------------- */
export const useWarmUpBrowser = () => {
  useEffect(() => {
    if (Platform.OS !== "android") return;
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

/* ---------------- Screen ---------------- */
export default function Index() {
  useWarmUpBrowser();

  const { startSSOFlow } = useSSO();
  const { user } = useUser();
  const navigation = useNavigation();

  /* -------- Hide header -------- */
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  /* -------- Create user in Strapi (NO navigation here) -------- */
  useEffect(() => {
    if (!user) return;

    const createNewUser = async () => {
      try {
        const res = await axiosClient.post("/user-lists", {
          data: {
            fullName: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
          },
        });
        console.log("User saved:", res.data);
      } catch (e) {
        console.log("User exists or error:", e);
      }
    };

    createNewUser();
  }, [user]);

  /* -------- Google Sign In (Clerk Expo v2.19.21) -------- */
  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy: "oauth_google",
        redirectUrl: AuthSession.makeRedirectUri(),
      });

      if (!createdSessionId) return;

      setActive?.({
        session: createdSessionId,
        navigate: () => {
          router.replace("/(tabs)/Home"); // ✅ correct Expo Router path
        },
      });
    } catch (err) {
      console.error("SSO Error:", err);
    }
  }, [startSSOFlow]);

  /* ---------------- UI ---------------- */
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/landingimg/businessimg.jpg")}
      />

      <View style={styles.titleBox}>
        <Text style={styles.title}>Welcome to</Text>
        <Text style={styles.subtitle}>Business Directory</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.85}
          style={styles.googleBtn}
        >
          <Image
            source={require("../assets/landingimg/google.png")}
            style={styles.googleIcon}
          />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.skipBtn}
          onPress={() => router.replace("/(tabs)/Home")}
        >
          <Text style={styles.skipText}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/* ---------------- Styles ---------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e293b",
    alignItems: "center",
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 85,
    marginTop: 110,
    borderWidth: 4,
    borderColor: "#38bdf8",
  },
  titleBox: {
    marginTop: 50,
    alignItems: "center",
  },
  title: {
    color: "#e5e7eb",
    fontSize: 28,
    fontWeight: "600",
  },
  subtitle: {
    color: "#38bdf8",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 5,
  },
  card: {
    backgroundColor: "#f8fafc",
    borderRadius: 24,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginTop: 60,
    width: "85%",
    height: 200,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  googleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f766e",
    paddingVertical: 14,
    borderRadius: 30,
  },
  googleIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  googleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  skipBtn: {
    marginTop: 15,
    backgroundColor: "#e2e8f0",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
  },
  skipText: {
    color: "#334155",
    fontSize: 16,
    fontWeight: "600",
  },
});
