import { useExercises } from "@/context/exercisesContext";
import { Aufgabe } from "@/interfaces/aufgabe";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function ExerciseForm() {
  const { addExercise } = useExercises();
  const [name, setName] = useState("");
  const [type, setType] = useState<Aufgabe["type"]>("Weight");
  const [imageUri, setImageUri] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    if (!name.trim()) {
      setMessage("Please enter a name for the exercise.");
      return;
    }

    addExercise({
      name: name.trim(),
      type,
      imageUri: imageUri.trim() || undefined,
    });

    setName("");
    setType("Weight");
    setImageUri("");
    setMessage("Exercise added successfully.");

    setTimeout(() => setMessage(""), 3000);
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Add a new exercise</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Bench Press"
        placeholderTextColor="#999"
      />

      <Text style={styles.label}>Type</Text>
      <View style={styles.typeRow}>
        {(["Weight", "Time"] as Aufgabe["type"][]).map((value) => (
          <Pressable
            key={value}
            onPress={() => setType(value)}
            style={({ pressed }) => [
              styles.typeButton,
              type === value && styles.typeButtonActive,
              pressed && styles.typeButtonPressed,
            ]}
          >
            <Text
              style={[
                styles.typeButtonText,
                type === value && styles.typeButtonTextActive,
              ]}
            >
              {value}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Image URI (optional)</Text>
      <TextInput
        style={styles.input}
        value={imageUri}
        onChangeText={setImageUri}
        placeholder="https://example.com/exercise.jpg"
        placeholderTextColor="#999"
      />

      <Pressable style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Save exercise</Text>
      </Pressable>

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderColor: "#000",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 14,
    color: "#000",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 6,
    color: "#333",
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#000",
    backgroundColor: "#fafafa",
  },
  typeRow: {
    flexDirection: "row",
    gap: 10,
  },
  typeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  typeButtonActive: {
    backgroundColor: "#0d5ab8",
    borderColor: "#0d5ab8",
  },
  typeButtonPressed: {
    opacity: 0.8,
  },
  typeButtonText: {
    color: "#333",
    fontWeight: "600",
  },
  typeButtonTextActive: {
    color: "#fff",
  },
  submitButton: {
    marginTop: 18,
    borderRadius: 12,
    backgroundColor: "#0d5ab8",
    paddingVertical: 14,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  message: {
    marginTop: 12,
    fontSize: 14,
    color: "#0a5a19",
  },
});
