import { useExercises } from "@/context/exercisesContext";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function AufgabenFlatList() {
  const { exercises } = useExercises();
  const data = exercises;
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        data={data}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.imageUri}</Text>
            <Text style={styles.exerciseTitle}>{item.name}</Text>
            <Text>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  exerciseTitle: {
    fontSize: 24,
    color: "#000",
  },
  card: {
    flexBasis: "48%",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 3,
    marginTop: 10,
  },
});
