import { StyleSheet, Text, View } from "react-native";
import Routes from "./routes";

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#333",
    backgroundColor: "#911",
  },
});
