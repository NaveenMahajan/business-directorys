import React, { useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, Image, StyleSheet, View } from "react-native";

const { width } = Dimensions.get("window");

type Slidertype = {
  id: number;
  name: string;
  image: {
    url: string;
  };
};

const sliderData: Slidertype[] = [
  {
    id: 1,
    name: "Nature",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
  },
  {
    id: 2,
    name: "Office",
    image: {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
  },
  {
    id: 3,
    name: "City",
    image: {
      url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    },
  },
];

export default function Sliders() {
  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);
  const [sliders] = useState(sliderData);

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex.current =
        currentIndex.current === sliders.length - 1
          ? 0
          : currentIndex.current + 1;

      flatListRef.current?.scrollToIndex({
        index: currentIndex.current,
        animated: true,
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={sliders}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={{ uri: item.image.url }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: width,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 20,
  },
  image: {
    width: width,
    height: 180,
    resizeMode: "cover",
  },
});
