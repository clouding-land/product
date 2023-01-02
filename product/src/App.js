import "./styles.css";
import { useState } from "react";
import MainRoutes from "./Routes/MainRoutes";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}
