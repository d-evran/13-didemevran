import { StyleSheet, Image, View } from "react-native";
import React from "react";

const SectionItem = ({item}) => {
  return (
    <View>
      <Image source={item.image} style={styles.sectionImage} />
    </View>
  );
};

export default SectionItem;

const styles = StyleSheet.create({
    sectionImage: {
        width: 200,
        height: 200,
        backgroundColor:"red"
      },
});
