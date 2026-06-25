export interface Aufgabe {
  name: string;
  type: "Time" | "Weight";
  imageUri?: string;
}

export const aufgabenList: Aufgabe[] = [
  { name: "Bench Press", type: "Weight", imageUri: "NONE" },
  { name: "Cardio", type: "Time", imageUri: "NONE" },
  { name: "Dip machine", type: "Weight", imageUri: "NONE" },

  { name: "Squats", type: "Weight", imageUri: "NONE" },
  { name: "Deadlift", type: "Weight", imageUri: "NONE" },
  { name: "Leg Press", type: "Weight", imageUri: "NONE" },
  { name: "Pull Ups", type: "Weight", imageUri: "NONE" },
  { name: "Lat Pulldown", type: "Weight", imageUri: "NONE" },
  { name: "Shoulder Press", type: "Weight", imageUri: "NONE" },
  { name: "Bicep Curls", type: "Weight", imageUri: "NONE" },
  { name: "Tricep Pushdown", type: "Weight", imageUri: "NONE" },
  { name: "Plank", type: "Time", imageUri: "NONE" },
  { name: "Treadmill Run", type: "Time", imageUri: "NONE" },
];
