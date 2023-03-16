import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Linking } from "react-native";
import { TextInput } from "react-native-web";
import DemoTest from "./DemoTest";

export default function App() {
  const year = new Date().getFullYear();
  const onPressLearnMore = () => {
    Linking.openURL("https://youtube.com")
  };

  const onChangeNumber = () => {
    console.log("number");
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>
        Hi, I'm run react nation web. yeeeee :{" "}
        <span style={styles.yearTest}> {year}</span>{" "}
      </Text>
      <DemoTest></DemoTest>

      <Button
        onPress={onPressLearnMore}
        title="Go to Youtube"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  yearTest: {
    color: "red",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
