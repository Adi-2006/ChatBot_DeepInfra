import { useSelector } from "react-redux";
import Message from "./Message";
import ChatInput from "./ChatInput";

const ChatBot = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="flex flex-col md:h-[90vh] h-[70vh] w-full max-w-lg mx-auto bg-zinc-400 shadow-lg rounded-lg">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <Message key={index} type={msg.type} text={msg.text} />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatBot;
