import BusinessListCard from "@/Components/BusinessListScreen/BusinessListCard";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { businessData } from "../../data/businessData";

export default function BusinessList() {
  const { categoriesName } = useLocalSearchParams();
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const filteredList = businessData.filter(
    (item) =>
      item.category === categoriesName &&
      item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={{ flex: 1 }}>
      {/* Background shape */}
      <View style={styles.headerBackground} />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("../../assets/Home/Arrowleft.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>{categoriesName} Business List</Text>
      </View>

      <TextInput
        placeholder="Search business..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />

      <BusinessListCard data={filteredList} />
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
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 50,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  searchInput: {
    marginHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
});
