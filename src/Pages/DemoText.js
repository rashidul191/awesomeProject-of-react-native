import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold",
    fontSize: "20px",
    color: "white",
    backgroundColor: "green",
    padding: "10px",
    margin: "10px",
  },
});

export default function DemoText() {
  const [name, setName] = useState("Rased");
  const [session, setSession] = useState({ number: 6, title: "state" });
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(true);

  const handleName = () => {
    setName("Rashidul");
    setSession({ number: 10, title: "style" });
    setCount(count + 1);
    setCurrent(false);
  };
  return (
    <View>
      <Text style={styles.textStyle}>My name is: {name}</Text>
      <Text>
        This session number is {session.number} and about {session.title}
      </Text>
      <Text>Count number: {count}</Text>
      <Text>{current ? "current session" : "next session"}</Text>
      <Button title="Click Me" onPress={handleName}></Button>
    </View>
  );
}
