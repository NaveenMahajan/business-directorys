import { useUser } from "@clerk/clerk-expo";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Header() {
  const { user } = useUser();
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: user?.imageUrl }}
            style={{ width: 50, height: 50, borderRadius: 99 }}
          />
          <View>
            <Text style={styles.header}>Welcome,</Text>
            <Text style={styles.name}> {user?.fullName}</Text>
          </View>
        </View>
        <View>
          <Image
            source={require("../../assets/Home/bell.png")}
            style={{ width: 35, height: 35 }}
          />
        </View>
      </View>

      <View>
        <TextInput
          placeholder="Search"
          style={{
            backgroundColor: "white",
            borderRadius: 99,
            paddingHorizontal: 20,
            marginTop: 10,
            fontSize: 15,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 19,
  },
  name: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
