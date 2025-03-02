import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessageToBot } from "../redux/chatSlice";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (input.trim() === "") return;
    dispatch(sendMessageToBot(input));
    setInput("");
  };

  return (
    <div className="flex p-2 border-t">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 p-2 border rounded-lg focus:outline-none"
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
