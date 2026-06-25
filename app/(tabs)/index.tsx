import Fab from "@/components/fab";
import Greetings from "@/components/greetings";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Greetings />
      <Fab iconName="barbell-sharp" routeTo={"/trainingSession"} />
    </View>
  );
}
