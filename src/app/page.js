import Image from "next/image";
import Header from "./components/Header";
import Homepage from "./pages/homepage";

export default function Home() {
  return (
    <div>
      <Header />
      <Homepage />
    </div>
  );
}
