import ProfilePage from "@/Components/ProfileScreen/Profiledetails";
import React from "react";
import { View } from "react-native";

export default function Profile() {
  return (
    <View>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: -200,
          width: "200%",
          height: 250,
          backgroundColor: "#38bdf8",
          borderBottomLeftRadius: 200,
          borderBottomRightRadius: 200,
        }}
      />
      <ProfilePage />
    </View>
  );
}
