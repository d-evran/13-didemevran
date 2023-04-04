import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const KartlarimScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/kart.png")} />
      <Text style={styles.title}>Kredi / Banka Kartlarim</Text>
      <Text style={styles.subtitle}>
        Masterpass'e kartlarini kaydet, alisverisini Hopi mobil ödeme ile kolayca
        yap.
      </Text>
      <TouchableOpacity>
        <View style={styles.section}>
          <Image style={styles.image2} source={require("../../assets/mastercard.png")} />
          <Text style={{color: "#539EB1"}}>Masterpass Hesabini Iliskilendir</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>Ulasim Kartlarim</Text>
      <Text style={styles.subtitle}>
        Istanbulkart'ini kaydederek kartlarina PAracik ile yükleme yapabilirsin.
      </Text>
      <TouchableOpacity>
        <View style={styles.section}>
          <Image style={styles.image2} source={require("../../assets/istanbulkart.png")} />
          <Text style={{color: "#539EB1"}}>Istanbulkart Ekle</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default KartlarimScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#484848",
    marginBottom: 5
  },
  subtitle: {
    fontSize: 12,
    color: "#484848",
    marginBottom: 25
  },
  image2: {
    resizeMode: "contain",
    width: 35,
    height: 35,
    marginRight: 15
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    borderColor: "#539EB1",
    borderStyle: "dashed",
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 10,
    marginBottom: 20
  }
});
