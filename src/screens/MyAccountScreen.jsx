import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../contexts/AuthProvider";

const MyAccountScreen = () => {
  const user = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={require("../../assets/profile.png")}
        />
        <Text style={styles.info}>{user}</Text>
        <AntDesign name="edit" size={22} color="black" />
      </View>

      {/* Bildirimlerim */}
      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <MaterialCommunityIcons name="bell" size={24} color="black" />
            <Text>Bildirimlerin</Text>
          </View>
          <View style={styles.listitemRight}>
            <Text style={styles.number}>7</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      {/* Listelerim */}
      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <MaterialCommunityIcons name="star" size={24} color="black" />
            <Text>Listelerim</Text>
          </View>
          <View style={styles.listitemRight}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>

      {/* Müsteri Hizmetleri */}
      <View>
        <View style={styles.listitem}>
          <View style={styles.listitemLeft}>
            <MaterialCommunityIcons name="phone-in-talk" size={24} color="black" />
            <Text>Müsteri Hizmetleri</Text>
          </View>
          <View style={styles.listitemRight}>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  image: {
    resizeMode: "contain",
    width: 70,
    height: 70,
  },
  info: {
    fontSize: 24,
    fontWeight: "600",
    marginHorizontal: 5,
  },
  listitem: {
    display: "flex",
    flexDirection: "row",
    borderTopColor: "#D4D4D4",
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent:"space-between"
  },
  listitemLeft: {
    display: "flex",
    flexDirection: "row",
    gap: 15
  },
  listitemRight: {
    display: "flex",
    flexDirection: "row",
    gap: 5
  },
  number: {
    backgroundColor: "#00ADE9",
    color: "white",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 5
  }
});
