const Message = ({ type, text }) => {
  return (
    <div className={`flex ${type === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-3 rounded-lg max-w-[75%] text-white ${
          type === "user" ? "bg-blue-500" : "bg-gray-600"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
