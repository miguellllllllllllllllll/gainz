import { Text } from "@react-navigation/elements";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function TrainingSession() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View>
      <Text>Time: {count}</Text>
    </View>
  );
}
