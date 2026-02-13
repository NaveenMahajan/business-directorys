import ExploreBusinessList from "@/Components/ExploreBusiness/ExploreBusinessList";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Explore() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.backgroundShape} />

      <View style={styles.headerContainer}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={require("../../assets/Home/Arrowleft.png")}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.header}>Explore More Business</Text>
        </View>

        <TextInput
          placeholder="Search"
          placeholderTextColor="#666"
          style={styles.searchInput}
        />
      </View>

      <View style={{ flex: 1 }}>
        <ExploreBusinessList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  backgroundShape: {
    position: "absolute",
    top: 0,
    left: -100,
    width: "160%",
    height: 250,
    backgroundColor: "#38bdf8",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 500,
  },
  headerContainer: {
    padding: 28,
    marginTop: 35,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  header: {
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 99,
    paddingHorizontal: 20,
    height: 45,
    fontSize: 15,
  },
});
