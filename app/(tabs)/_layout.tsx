import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useNavigation } from "expo-router";
import React, { useEffect } from "react";

export default function TabLayout() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Explore"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="Favorite"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
