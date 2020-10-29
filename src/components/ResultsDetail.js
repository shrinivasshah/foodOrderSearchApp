import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({
  result: { name, image_url, rating, review_count },
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: image_url }} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
