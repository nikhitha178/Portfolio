import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Index from "./pages/index";
import "./index.css";

createRoot(document.getElementById("root")!).render(<Index />);
