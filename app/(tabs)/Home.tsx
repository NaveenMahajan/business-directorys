import CategoryList from "@/Components/HomeScreen/Category";
import Header from "@/Components/HomeScreen/Header";
import PopularBusiness from "@/Components/HomeScreen/PopularBusiness";
import Sliders from "@/Components/HomeScreen/Sliders";
import React from "react";
import { ScrollView, View } from "react-native";

export default function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 55, padding: 20 }}
    >
      {/* Blue top background */}
      <View
        style={{
          position: "absolute",
          top: 0,
          left: -100,
          width: "200%",
          height: 300,
          backgroundColor: "#38bdf8",
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200,
        }}
      />

      <Header />
      <Sliders />
      <CategoryList />
      <PopularBusiness />
    </ScrollView>
  );
}
