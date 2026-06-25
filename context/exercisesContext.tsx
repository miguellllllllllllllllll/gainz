import type { Aufgabe } from "@/interfaces/aufgabe";
import { aufgabenList } from "@/interfaces/aufgabe";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface ExercisesContextValue {
  exercises: Aufgabe[];
  addExercise: (exercise: Omit<Aufgabe, "id">) => void;
  updateExercise: (id: string, updates: Partial<Omit<Aufgabe, "id">>) => void;
  deleteExercise: (id: string) => void;
}

const ExercisesContext = createContext<ExercisesContextValue | undefined>(
  undefined,
);

export function ExercisesProvider({ children }: { children: ReactNode }) {
  const [exercises, setExercises] = useState<Aufgabe[]>([]);

  useEffect(() => {
    async function load() {
      const stored = await AsyncStorage.getItem("exercises");
      setExercises(
        stored
          ? JSON.parse(stored)
          : aufgabenList.map((item) => ({
              ...item,
              id: String(Date.now() + Math.random()),
            })),
      );
    }
    load();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("exercises", JSON.stringify(exercises));
  }, [exercises]);

  const addExercise = (exercise: Omit<Aufgabe, "id">) =>
    setExercises((current) => [
      { ...exercise, id: `${Date.now()}` },
      ...current,
    ]);

  const updateExercise = (id: string, updates: Partial<Omit<Aufgabe, "id">>) =>
    setExercises((current) =>
      current.map((item) => (item.id === id ? { ...item, ...updates } : item)),
    );

  const deleteExercise = (id: string) =>
    setExercises((current) => current.filter((item) => item.id !== id));

  return (
    <ExercisesContext.Provider
      value={{ exercises, addExercise, updateExercise, deleteExercise }}
    >
      {children}
    </ExercisesContext.Provider>
  );
}

export function useExercises() {
  const context = useContext(ExercisesContext);
  if (!context)
    throw new Error("useExercises must be used inside ExercisesProvider");
  return context;
}
