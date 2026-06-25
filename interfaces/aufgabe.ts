export interface Aufgabe {
  id: string;
  name: string;
  type: "Time" | "Weight";
  imageUri?: string;
}

export const aufgabenList: Aufgabe[] = [
  { id: "1", name: "Bench Press", type: "Weight", imageUri: "NONE" },
  { id: "2", name: "Cardio", type: "Time", imageUri: "NONE" },
  { id: "3", name: "Dip machine", type: "Weight", imageUri: "NONE" },

  { id: "4", name: "Squats", type: "Weight", imageUri: "NONE" },
  { id: "5", name: "Deadlift", type: "Weight", imageUri: "NONE" },
  { id: "6", name: "Leg Press", type: "Weight", imageUri: "NONE" },
  { id: "7", name: "Pull Ups", type: "Weight", imageUri: "NONE" },
  { id: "8", name: "Lat Pulldown", type: "Weight", imageUri: "NONE" },
  { id: "9", name: "Shoulder Press", type: "Weight", imageUri: "NONE" },
  { id: "10", name: "Bicep Curls", type: "Weight", imageUri: "NONE" },
  { id: "11", name: "Tricep Pushdown", type: "Weight", imageUri: "NONE" },
  { id: "12", name: "Plank", type: "Time", imageUri: "NONE" },
  { id: "13", name: "Treadmill Run", type: "Time", imageUri: "NONE" },
];
