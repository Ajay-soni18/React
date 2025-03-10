import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function Myfun() {
  return <p>This is my function</p>;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />

      <Myfun />
    </>
  </StrictMode>
);
