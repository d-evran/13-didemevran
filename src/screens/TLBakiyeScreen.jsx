import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const TLBakiyeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/hopipay.jpg")}
      />
      <Text style={{ color: "#6D6D6D", marginBottom: 10, fontSize: 12 }}>
        Hopipay kart icine kolayca yükleyerek istedigin her yerde harcama
        yapabildigin ücretsiz bir sanal karttir. Bu kartinla;
      </Text>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <AntDesign name="checkcircle" size={16} color="#00B0F2" />
        <Text style={styles.listItem}>
          Hopi ile anlasmali markalarda parani kat kat harcayabilirsin.
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <AntDesign name="checkcircle" size={16} color="#00B0F2" />
        <Text style={styles.listItem}>
          Arkadaslarina aninda para gönderebilirsin.
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <AntDesign name="checkcircle" size={16} color="#00B0F2" />
        <Text style={styles.listItem}>
          Tüm e-ticaret sitelerinde kolayca alisveris yapabilirsin
        </Text>
      </View>
      <LinearGradient
        colors={["#0E9DD7", "#39B44A"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.aktiveEt}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>
          HOPIPAY KARTINI AKTIVE ET
        </Text>
      </LinearGradient>
    </View>
  );
};

export default TLBakiyeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 30,
  },
  listItem: {
    color: "#6D6D6D",
    marginBottom: 10,
    fontSize: 12,
    marginLeft: 10,
  },
  aktiveEt: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
