import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";

export default function TrainingSession() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <Text style={styles.timer}>Timer: {count}s</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
  timer: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#000",
  },
});
