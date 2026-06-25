import { useUser } from "@/context/userContext";
import { StyleSheet, Text, View } from "react-native";

export default function Greetings() {
  const { user } = useUser();

  return (
    <View>
      <Text style={styles.text}>Hello, {user.name}!</Text>
      <Text>Start ur training here!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
});
