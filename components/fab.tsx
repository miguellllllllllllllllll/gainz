import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
export default function Fab() {
  const router = useRouter();
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#2971c9" : "#0d5ab8",
          scale: pressed ? 1.1 : 1,
        },
        styles.pressable,
      ]}
      onPress={() => router.navigate("/tabs/index")}
    >
      <Ionicons style={{}} name="barbell-sharp" size={32} color="#fff" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    justifyContent: "center",
  },
  pressable: {
    position: "absolute",
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    bottom: 20,
    borderRadius: 35,

    //IOS
    shadowColor: "#211d29",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 80,
    shadowRadius: 20,

    // ANDROID
    elevation: 20,
  },
  textInsidePressable: {
    color: "#ffffff",
    justifyContent: "center",
  },
});
