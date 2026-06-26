import { TrainingList, type Training } from "@/interfaces/training";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface TrainingsContextValue {
  training: Training[];
}

const TrainingsContext = createContext<TrainingsContextValue | undefined>(
  undefined,
);

export function TrainingsProvider({ children }: { children: ReactNode }) {
  const [training, setTrainings] = useState<Training[]>([]);

  useEffect(() => {
    async function load() {
      const stored = await AsyncStorage.getItem("trainings");
      setTrainings(
        stored
          ? JSON.parse(stored)
          : TrainingList.map((item) => ({
              ...item,
            })),
      );
    }
    load();
  }, []);

  return (
    <TrainingsContext.Provider value={{ training }}>
      {children}
    </TrainingsContext.Provider>
  );
}

export function useTrainings() {
  const context = useContext(TrainingsContext);
  if (!context)
    throw new Error("useTrainings must be used inside TrainingsProvider");
  return context;
}
