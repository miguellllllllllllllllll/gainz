import AufgabenFlatList from "@/components/aufgabenFlatList";
import Fab from "@/components/fab";
export default function Exercises() {
  return (
    <>
      <AufgabenFlatList />
      <Fab iconName="add" routeTo={"/newExercise"} />
    </>
  );
}
