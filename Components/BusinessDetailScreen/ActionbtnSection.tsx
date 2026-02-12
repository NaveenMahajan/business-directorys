import React from "react";
import {
  Image,
  Linking,
  Platform,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Business = {
  id: string;
  name: string;
  address: string;
  rating: number;
  image: any;
  website: string;
  phone: string;
};

type Props = {
  business: Business;
};

export default function ActionbtnSection({ business }: Props) {
  const onNavigate = async () => {
    const nativeUrl =
      Platform.OS === "ios"
        ? `maps:0,0?q=${business.address}`
        : `geo:0,0?q=${business.address}`;

    try {
      await Linking.openURL(nativeUrl);
    } catch (error) {
      console.log("Error opening maps:", error);
    }
  };

  const onCall = async () => {
    try {
      await Linking.openURL(`tel:${business.phone}`);
    } catch (error) {
      console.log("Error making call:", error);
    }
  };

  const onWebsite = async () => {
    try {
      const url = business.website.startsWith("http")
        ? business.website
        : `https://${business.website}`;

      await Linking.openURL(url);
    } catch (error) {
      console.log("Error opening website:", error);
    }
  };

  const onShare = async () => {
    try {
      await Share.share({
        message:
          `Check out this local business!\n\n` +
          `Name: ${business.name}\n` +
          `Address: ${business.address}\n` +
          `Phone: ${business.phone}`,
      });
    } catch (error) {
      console.log("Error sharing:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.actionItem} onPress={onNavigate}>
        <View style={styles.button}>
          <Image
            source={require("../../assets/actionbtn/location.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.label}>Navigate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem} onPress={onCall}>
        <View style={styles.button}>
          <Image
            source={require("../../assets/actionbtn/phone.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.label}>Call</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem} onPress={onWebsite}>
        <View style={styles.button}>
          <Image
            source={require("../../assets/actionbtn/internet.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.label}>Website</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionItem} onPress={onShare}>
        <View style={styles.button}>
          <Image
            source={require("../../assets/actionbtn/share.png")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.label}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 1,
  },
  actionItem: {
    alignItems: "center",
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,

    // Android shadow
    elevation: 3,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  label: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "500",
    color: "#333",
  },
});
