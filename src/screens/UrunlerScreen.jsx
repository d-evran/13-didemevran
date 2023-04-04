import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../services/firebase";

const UrunlerScreen = () => {
  const [copyProducts, setCopyProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const imagesRef = collection(db, "products");
    const q = query(imagesRef, orderBy("id"));
    getDocs(q)
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, doc.data());
          data.push({
            id: doc.id,
            image: doc.data().imageUrl,
            productName: doc.data().productName,
            brandName: doc.data().brandName,
            category: doc.data().category,
            price: doc.data().price,
          });
        });
        setProducts(data);
        setCopyProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSortPrice = () => {
    const sortedProducts = products.sort((a, b) => {
      if (sortOrder) {
        setSortOrder(false);
        return a.price - b.price;
      } else {
        setSortOrder(true);
        return b.price - a.price;
      }
    });
    setProducts(sortedProducts);
  };
  const handleChangeText = (text) => {
    if (text) {
      const filteredProducts = products.filter((product) => {
        const x = product.productName
          .toLocaleLowerCase()
          .includes(text.toLocaleLowerCase());
        return x;
      });
      setProducts(filteredProducts);
      setSearch(text);
    } else {
      setProducts(copyProducts);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather name="search" size={24} color="#8B8B8C" />
        <TextInput
          placeholder="Marka veya kampanya ara"
          onChangeText={(text) => handleChangeText(text)}
          value={search}
        />
      </View>
      <View style={styles.topSection}>
        <Text style={{ fontWeight: "800" }}>{products.length} ürün</Text>
        <View style={styles.box}>
          <Text>Sirala</Text>
          <Octicons
            name="sort-desc"
            size={24}
            color="black"
            onPress={handleSortPrice}
          />
        </View>
        <View style={styles.box}>
          <Text>Filtrele</Text>
          <Octicons name="filter" size={24} color="black" />
        </View>
      </View>

      {/* Ürünler Listesi */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          style={{ margin: 10 }}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity key={item.id} style={styles.gridbox}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text
                style={{
                  color: "#474747",
                  fontWeight: "700",
                  marginBottom: 5,
                }}
              >
                {item.productName}
              </Text>
              <Text style={{ color: "#848587", fontSize: 12 }}>
                {item.category}
              </Text>
              <Text
                style={{
                  color: "#474747",
                  fontWeight: "700",
                  marginBottom: 5,
                }}
              >
                {item.brandName}
              </Text>
              <Text style={{ color: "#13C3F2", fontWeight: "700" }}>
                {item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default UrunlerScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white", paddingHorizontal: 10 },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F6F8",
    borderWidth: 1,
    borderColor: "#8B8B8C",
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    gap: 7,
  },
  topSection: {
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  image: {
    width: 100,
    height: "60%",
    resizeMode: "contain",
  },
  gridbox: {
    flex: 1,
    height: 225,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8B8B8C",
  },
});
