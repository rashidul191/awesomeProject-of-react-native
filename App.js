import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DemoButton from "./src/Pages/DemoButton";
import DemoText from "./src/Pages/DemoText";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <DemoText></DemoText>
      <DemoButton></DemoButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
