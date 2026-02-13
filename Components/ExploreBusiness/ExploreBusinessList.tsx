import { useRouter } from "expo-router";
import React from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const popularBusinesses = [
  {
    id: "1",
    name: "Star Coffee",
    category: "Coffee Shop",
    address: "Main Market Road, Sector 4",
    rating: 4.5,
    image: require("../../assets/popularbusiness/Coffee.webp"),
  },
  {
    id: "2",
    name: "Power Gym",
    category: "Fitness Center",
    address: "Green Park Street, Sector 9",
    rating: 4.3,
    image: require("../../assets/popularbusiness/gym.jpg"),
  },
  {
    id: "3",
    name: "Fresh Mart",
    category: "Grocery Store",
    address: "MG Road, City Center",
    rating: 4.6,
    image: require("../../assets/popularbusiness/grocery.webp"),
  },
  {
    id: "4",
    name: "Royal Salon",
    category: "Salon",
    address: "Market Street, Downtown",
    rating: 4.4,
    image: require("../../assets/popularbusiness/Salone.avif"),
  },
  {
    id: "5",
    name: "Spice Garden",
    category: "Restaurant",
    address: "Station Road, Sector 12",
    rating: 4.7,
    image: require("../../assets/popularbusiness/Coffee.webp"),
  },
  {
    id: "6",
    name: "Sweet Treats Bakery",
    category: "Cake Shop",
    address: "Mall Road, Near City Mall",
    rating: 4.8,
    image: require("../../assets/popularbusiness/gym.jpg"),
  },
];

export default function ExploreBusinessList() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <FlatList
        data={popularBusinesses}
        style={{ paddingBottom: 80 }}
        initialNumToRender={10}
        windowSize={5}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/business-details",
                params: { businessid: item.id },
              })
            }
          >
            <Image source={item.image} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
  },

  /* Header */
  header: {
    backgroundColor: "#16a34a",
    paddingTop: 60,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 45,
    fontSize: 15,
  },

  /* Cards */
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  image: {
    width: "100%",
    height: 170,
  },
  info: {
    padding: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    marginTop: 5,
    color: "gray",
  },
});
