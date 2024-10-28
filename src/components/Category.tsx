import { Sheet } from "react-modal-sheet";

interface CategoryProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function Category({ isOpen, setOpen }: CategoryProps) {
  return (
    <Sheet
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      snapPoints={[-50, 0.5, 100, 0]}
      initialSnap={1}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
      </Sheet.Container>
      <Sheet.Backdrop />
    </Sheet>
  );
}
