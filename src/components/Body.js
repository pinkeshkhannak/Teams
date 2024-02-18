import { DataComponent } from "./DataComponent";
import { Header } from "./Header";
import { AddButton } from "./AddButton";

export const Body = () => {
  return (
    <div>
      <Header />
      <DataComponent />
      <AddButton />
    </div>
  );
};
