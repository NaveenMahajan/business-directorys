import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { businessData } from "../../data/businessData";

const BusinessList = () => {
  const { categoriesName } = useLocalSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredList = businessData.filter(
    (item) =>
      item.category === categoriesName &&
      item.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: -100,
          width: "200%",
          height: 200,
          backgroundColor: "#38bdf8",
          borderBottomLeftRadius: 400,
          borderBottomRightRadius: 600,
        }}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={require("../../assets/Home/Arrowleft.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.title}>{categoriesName} Business List</Text>
      </View>

      {/* Search */}
      <View>
        <TextInput
          placeholder="Search business..."
          value={searchText}
          onChangeText={setSearchText}
          style={styles.searchInput}
        />
      </View>

      {/* Business list */}
      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id}
        onRefresh={onRefresh}
        refreshing={loading}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.rating}>⭐ {item.rating}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BusinessList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 99,
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 15,
    height: 45,
  },
  card: {
    marginTop: 20,
    flexDirection: "row",
    gap: 15,
    backgroundColor: "#cad8e7",
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    color: "gray",
    marginVertical: 2,
  },
  rating: {
    fontWeight: "600",
  },
});
