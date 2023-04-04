import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";

const TekliflerScreen = () => {
  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    const imagesRef = collection(db, "categoryImages");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, doc.data().image);
          data.push({ id: doc.id, image: doc.data().image });
        });
        setCategoryImages(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingTop: 20 }}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Feather name="tag" size={24} color="black" />
          <Text>Tüm Teklifleri Gör</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
      <View style={{ flex: 1 }}>
        {/*Category Images */}
        <FlatList
          data={categoryImages}
          keyExtractor={(item) => item.id.toString()}
          style={{ margin: 10 }}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} style={styles.gridbox}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default TekliflerScreen;

const styles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopColor: "#ECECEC",
    borderTopWidth: 1,
    borderBottomColor: "#ECECEC",
    borderBottomWidth: 1,
  },
  topLeft: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  separator: {
    width: 12,
  },
  image: {
    width: 163,
    height: "100%",
    resizeMode: "contain",
  },
  gridbox: {
    flex: 1,
    height: 125,
    margin: 2,
    justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      overflow:"hidden"
  },
});
