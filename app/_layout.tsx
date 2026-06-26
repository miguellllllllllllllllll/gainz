import { ExercisesProvider } from "@/context/exercisesContext";
import { TrainingsProvider } from "@/context/trainingsContext";
import { UserProvider } from "@/context/userContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <TrainingsProvider>
      <ExercisesProvider>
        <UserProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </UserProvider>
      </ExercisesProvider>
    </TrainingsProvider>
  );
}
