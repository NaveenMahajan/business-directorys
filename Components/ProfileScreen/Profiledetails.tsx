import { useClerk, useUser } from "@clerk/clerk-expo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  Linking,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Profiledetails() {
  const { user } = useUser();
  const router = useRouter();
  const { signOut } = useClerk();
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await signOut();
            router.replace("/");
          } catch (e) {
            Alert.alert("Error", "Something went wrong");
          }
        },
      },
    ]);
  };
  const onCall = async () => {
    const phoneNumber = "tel:9589971714";

    const supported = await Linking.canOpenURL(phoneNumber);

    if (supported) {
      await Linking.openURL(phoneNumber);
    } else {
      Alert.alert("Error", "Calling not supported on this device");
    }
  };

  const onShare = async () => {
    try {
      await Share.share({
        message:
          `Hey! 👋 Check out my profile\n\n` +
          `Name: ${user?.fullName}\n` +
          `Email: ${user?.primaryEmailAddress?.emailAddress}\n\n` +
          `Phone: ${user?.phoneNumbers?.[0]?.phoneNumber || "9589971714"}\n\n` +
          `Sent from my app 🚀`,
      });
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: user?.imageUrl }} style={styles.avatar} />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.name}>{user?.fullName || "No Name"}</Text>
          <Text style={styles.email}>
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
        </View>
      </View>
      <View style={styles.card2}>
        <View style={styles.menuContainer}>
          <Pressable
            onPress={() => router.push("/Explore")}
            style={({ pressed }) => [
              styles.menuItem,
              { backgroundColor: pressed ? "#f2f2f2" : "#fff" },
            ]}
          >
            <MaterialIcons name="explore" size={24} color="black" />
            <Text style={styles.menuText}>Explore</Text>
          </Pressable>

          <Pressable
            onPress={onShare}
            style={({ pressed }) => [
              styles.menuItem,
              { backgroundColor: pressed ? "#f2f2f2" : "#fff" },
            ]}
          >
            <MaterialIcons name="share" size={24} color="black" />
            <Text style={styles.menuText}>Share</Text>
          </Pressable>

          <Pressable
            onPress={onCall}
            style={({ pressed }) => [
              styles.menuItem,
              { backgroundColor: pressed ? "#f2f2f2" : "#fff" },
            ]}
          >
            <MaterialIcons name="contact-phone" size={24} color="black" />
            <Text style={styles.menuText}>Contact</Text>
          </Pressable>

          <Pressable
            onPress={handleLogout}
            style={({ pressed }) => [
              styles.menuItem,
              { backgroundColor: pressed ? "#f5bfbf" : "#ffffff" },
            ]}
          >
            <SimpleLineIcons name="logout" size={22} color="red" />
            <Text style={[styles.menuText, { color: "red" }]}>Logout</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: "center",
  },

  card: {
    width: "90%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
  card2: {
    marginTop: 40,
    width: "90%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    elevation: 6,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#070707",
  },

  email: {
    fontSize: 14,
    color: "#4b4c4e",
    marginTop: 4,
  },

  menuContainer: {
    // borderRadius: 50,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
    paddingVertical: 16,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: "100%",
  },

  menuText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
