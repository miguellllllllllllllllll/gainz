import { useTrainings } from "@/context/trainingsContext";
import { Text } from "@react-navigation/elements";
import { FlatList, View } from "react-native";
export default function ProgressFlatList() {
  const { training } = useTrainings();
  const data = training;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
          <Text>{item.duration}</Text>
        </View>
      )}
    ></FlatList>
  );
}
