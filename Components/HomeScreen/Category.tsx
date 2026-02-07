import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const categories = [
  {
    id: "1",
    name: "Coffee Shop",
    image: require("../../assets/categoryimg/coffee.png"),
  },
  {
    id: "2",
    name: "Gym",
    image: require("../../assets/categoryimg/weightlifter.png"),
  },
  {
    id: "3",
    name: "Grocery Store",
    image: require("../../assets/categoryimg/grocery.png"),
  },
  {
    id: "4",
    name: "Cake Shop",
    image: require("../../assets/categoryimg/cake.png"),
  },
  {
    id: "5",
    name: "Cleaner",
    image: require("../../assets/categoryimg/cleaner.png"),
  },
  {
    id: "6",
    name: "Restaurants",
    image: require("../../assets/categoryimg/restaurant.png"),
  },
  {
    id: "7",
    name: "Electrician",
    image: require("../../assets/categoryimg/electrician.png"),
  },
  {
    id: "8",
    name: "Saloon",
    image: require("../../assets/categoryimg/saloon.png"),
  },
];

const CategoryList = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Category</Text>
        <Text style={styles.viewAll}>View All</Text>
      </View>

      {/* Grid */}
      <FlatList
        data={categories}
        numColumns={4}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.iconBox}>
              <Image source={item.image} style={styles.icon} />
            </View>
            <Text style={styles.label}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;
const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    width: "100%",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#12aa19",
    fontSize: 14,
  },
  item: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: "#d6d2d2",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  icon: {
    width: 32,
    height: 32,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
  },
});
