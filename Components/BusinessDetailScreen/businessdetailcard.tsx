import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ActionbtnSection from "./ActionbtnSection";

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
  data: Business;
};

export default function BusinessDetailsCard({ data }: Props) {
  const { name, address, rating, image, website } = data;
  const router = useRouter();

  return (
    <ScrollView>
      <View>
        <Image source={image} style={styles.heroImage} />

        {/* <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Image
            source={require("../../assets/Home/Arrowleft.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity> */}
      </View>

      <View style={styles.content}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.ratingBox}>
            <Text style={styles.rating}>⭐ {rating}</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image
            source={require("../../assets/actionbtn/location2.png")}
            style={{ width: 20, height: 20, tintColor: "green" }}
          />
          <Text style={styles.address}>{address}</Text>
        </View>
        <TouchableOpacity
          style={{ display: "flex", flexDirection: "row", gap: 10 }}
        >
          <Image
            source={require("../../assets/actionbtn/websit.png")}
            style={{ width: 20, height: 20, tintColor: "green" }}
          />
          <Text style={styles.websit}>{website}</Text>
        </TouchableOpacity>

        <ActionbtnSection business={data} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.sectionText}>
            This is a popular business known for its quality service and great
            customer experience.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  websit: {
    fontSize: 17,
  },
  heroImage: {
    width: 360,
    height: 230,
    alignSelf: "center",
    borderRadius: 30,
  },
  backButton: {
    position: "absolute",
    top: 45,
    left: 15,
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 8,
    borderRadius: 20,
  },
  backIcon: {
    width: 28,
    height: 28,
    tintColor: "#fff",
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
  },
  address: {
    fontSize: 17,
    color: "black",
    marginBottom: 10,
  },
  ratingBox: {
    backgroundColor: "#e6f7ec",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#12aa19",
  },
  section: {
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionText: {
    fontSize: 15,
    color: "#444",
    lineHeight: 22,
  },
});
