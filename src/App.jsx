import React from "react";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="flex flex-col gap-2 justify-around items-center h-screen bg-gray-300">
      <h2 className="font-bold text-gray-700 text-xl hover:text-orange-400">
        ChatBot - Using DeepInfra API
      </h2>
      <ChatBot />
    </div>
  );
}

export default App;
