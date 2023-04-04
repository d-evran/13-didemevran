import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../services/firebase";
import { AuthSetterContext } from "../contexts/AuthProvider";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const LoginScreen = () => {
  const [name, setName] = useState("Didem");
  const [email, setEmail] = useState("didemevran@gmail.com");
  const [password, setPassword] = useState("123456");

  const setUser = useContext(AuthSetterContext);

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(JSON.stringify(user, null,2));
        sendEmailVerification(user).then(() => {
          console.log("first verification email sent");
          // Email verification sent!
        });
        addUserToDatabase(user);
        setUser(name);
      }
    );
  };

  const addUserToDatabase = (user) => {
    addDoc(collection(db, "users"), {
      email: email,
      password: password,
      name: name,
      uid: user.uid,
      money: 201.50,
      createdAt: serverTimestamp(),
    }).then(() => {
      console.log("User added to firestore");
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        style={styles.image}
        source={require(// @ts-ignore
        "../../assets/hopi.png")}
      />
      <Text style={styles.title}>Hopi'n seni cebinden tanir!</Text>
      <Text>
        Hopi üyeligin icin kullanmak istedigin{" "}
        <Text style={{ fontWeight: "500" }}>
          {" "}
          adi, email adresi ve parolani{" "}
        </Text>
        asagidaki alana yazmalisin
      </Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
          DEVAM ET
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#D6D6D6",
    width: "100%",
    paddingTop: 12,
    fontWeight: "900",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#CF2C7C",
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    alignSelf: "center",
  },
});
