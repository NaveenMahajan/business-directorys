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
    image: require("../../assets/popularbusiness/Coffee.webp"),
  },
  {
    id: "2",
    name: "Power Gym",
    category: "Fitness Center",
    image: require("../../assets/popularbusiness/gym.jpg"),
  },
  {
    id: "3",
    name: "Fresh Mart",
    category: "Grocery Store",
    image: require("../../assets/popularbusiness/grocery.webp"),
  },
  {
    id: "4",
    name: "Royal Salon",
    category: "Salon",
    image: require("../../assets/popularbusiness/Salone.avif"),
  },
];

const PopularBusinessList = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Popular Business</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      <FlatList
        data={popularBusinesses}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/business-details",
                params: {
                  id: item.id,
                },
              })
            }
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.category}>{item.category}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 8,
                marginHorizontal: 10,
                gap: 10,
              }}
            >
              <Image
                source={require("../../assets/popularbusiness/star.png")}
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text>4.5/5</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PopularBusinessList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 12,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  viewAll: {
    fontSize: 14,
    color: "#12aa19",
  },

  card: {
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginRight: 16,
    paddingBottom: 12,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginHorizontal: 10,
  },

  category: {
    fontSize: 13,
    color: "#666",
    marginHorizontal: 10,
    marginTop: 2,
  },
});
