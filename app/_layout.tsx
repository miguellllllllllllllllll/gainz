import { ExercisesProvider } from "@/context/exercisesContext";
import { UserProvider } from "@/context/userContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ExercisesProvider>
      <UserProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </UserProvider>
    </ExercisesProvider>
  );
}
