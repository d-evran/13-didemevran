import { StyleSheet } from "react-native";
import AuthProvider from "./src/contexts/AuthProvider";
import MainRouter from "./src/routes/MainRouter";
import Router from "./src/routes/Router";

export default function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({});
