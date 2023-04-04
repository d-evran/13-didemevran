import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { qrCodeImage } from "../data/hopiImages";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const QRCodeScreen = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(seconds => seconds - 1);
      } else if (time === 0) {
        setTime(60)
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{time} saniye</Text>
      <Text>icinde QR kodun yenilenecek!</Text>
      <View>
        <Image
          source={qrCodeImage[0].image}
          style={{
            width: 200,
            height: 200,
            marginVertical: 30,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "baseline",
          }}
        >
          <Text style={styles.code}>4507 7627 27</Text>
          <FontAwesome5 name="copy" size={20} color="black" />
        </View>
        <Text style={{ textAlign: "center" }}>
          QR kodu
          <Text style={{ fontWeight: "500" }}> kasada okutarak</Text> veya{" "}
          {"\n"} internet alisverislerinde
          <Text style={{ fontWeight: "500" }}>
            {" "}
            altindaki kodu {"\n"} yazarak{" "}
          </Text>
          tekliflerden faydalanabilirsiniz
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="camerao" size={24} color="white" />
        <Text style={{color:"white"}}>QR OKUT</Text>
        <MaterialIcons name="keyboard-arrow-up" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    color: "#CE716C",
    fontWeight: "700",
  },
  code: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    marginRight: 15,
  },
  button: {
    backgroundColor: "#00ADEF",
    marginTop: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "65%"
  },
});
