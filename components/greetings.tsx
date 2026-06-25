import { StyleSheet, Text, View } from "react-native";

export default function Greetings() {
  const name = "Miguel";
  return (
    <View>
      <Text style={styles.text}>Hello, {name}!</Text>
      <Text>Start ur training here!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
