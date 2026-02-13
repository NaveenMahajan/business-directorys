import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Business = {
  id: string;
  name: string;
  address: string;
  rating: number;
  image: any;
};

type Props = {
  data: Business[];
};

const BusinessListCard = ({ data }: Props) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={onRefresh}
        refreshing={loading}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>

              <View style={styles.row}>
                <Text style={styles.rating}>⭐ {item.rating}</Text>
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/business-details",
                      params: {
                        id: item.id,
                      },
                    })
                  }
                >
                  <Text style={styles.viewBtn}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BusinessListCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginTop: 5,
  },
  viewBtn: {
    fontSize: 15,
    color: "#12aa19",
    fontWeight: "bold",
  },
});
