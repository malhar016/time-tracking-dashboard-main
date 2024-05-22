import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import "./styles.css";

function App() {
  return <Home />;
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
