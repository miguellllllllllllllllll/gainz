import { aufgabenList } from "@/interfaces/aufgabe";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function AufgabenFlatList() {
  const data = aufgabenList;
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text>{item.type}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 24,
  },
});
