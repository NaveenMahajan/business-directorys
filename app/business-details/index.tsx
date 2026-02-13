import BusinessDetailsCard from "@/Components/BusinessDetailScreen/businessdetailcard";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { businessData } from "../../data/businessData";

export default function BusinessDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const business = businessData.find((item) => item.id === id);
  if (!business) {
    return (
      <View>
        <Text>Business not found</Text>
      </View>
    );
  }
  return (
    <View>
      <View style={{}}>
        {/* Background shape */}
        <View style={styles.headerBackground} />

        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={require("../../assets/Home/Arrowleft.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../../assets/actionbtn/bookmark.png")}
              style={styles.bookmark}
            />
          </TouchableOpacity>
        </View>
        <BusinessDetailsCard data={business} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerBackground: {
    position: "absolute",
    top: 0,
    left: -100,
    width: "160%",
    height: 250,
    backgroundColor: "#38bdf8",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 500,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  bookmark: {
    width: 27,
    height: 27,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
});
