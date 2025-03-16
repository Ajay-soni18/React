import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
          <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-full shadow-lg">
            <button
              onClick={() => setColor("red")}
              className="px-4 py-1 text-sm font-semibold leading-6 text-gray-900 rounded-full shadow-sm outline-none ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              style={{ backgroundColor: "red" }}
            >
              RED
            </button>
            <button
              onClick={() => setColor("blue")}
              className="px-4 py-1 text-sm font-semibold leading-6 text-gray-900 rounded-full shadow-sm outline-none ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("green")}
              className="px-4 py-1 text-sm font-semibold leading-6 text-gray-900 rounded-full shadow-sm outline-none ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("brown")}
              className="px-4 py-1 text-sm font-semibold leading-6 text-gray-900 rounded-full shadow-sm outline-none ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              style={{ backgroundColor: "Brown" }}
            >
              Brown
            </button>
            <button
              onClick={() => setColor("black")}
              className="px-4 py-1 text-sm font-semibold leading-6 text-white rounded-full shadow-sm outline-none ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              style={{ backgroundColor: "Black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("Pink")}
              className="px-4 py-1 text-sm font-semibold leading-6 text-gray-900 rounded-full shadow-sm outline-none ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
