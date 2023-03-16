import { View, Text, StyleSheet, Button, Linking } from "react-native";
import React, { useState } from "react";
const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "16px",
    margin: "10px",
  },
});

export default function DemoButton() {
  const [count, setCount] = useState(0);
  const [countFive, setCountFive] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    setCountFive(countFive + 5);
  };
  return (
    <View>
      <Text>{countFive}</Text>

      <Button onPress={handleCount} title="add"></Button>
      <Text>
        My click : {count} time{count > 1 ? "s" : ""}
      </Text>
      <Button
        onPress={() => {
          Linking.openURL("https://youtube.com");
        }}
        title="Go to Youtube"
        color="red"
      ></Button>
    </View>
  );
}
