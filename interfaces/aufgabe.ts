export interface Aufgabe {
  name: string;
  type: "Time" | "Weight";
  imageUri?: string;
}

export const aufgabenList: Aufgabe[] = [
  { name: "Bench Press", type: "Weight", imageUri: "NONE" },
  { name: "Cardio", type: "Time", imageUri: "NONE" },
  { name: "Dip machine", type: "Weight", imageUri: "NONE" },
];
