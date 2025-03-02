import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBotResponse } from "../api"; // ✅ API function import

// ✅ API Call ka Async Thunk
export const sendMessageToBot = createAsyncThunk(
  "chat/sendMessageToBot",
  async (userMessage) => {
    const botReply = await fetchBotResponse(userMessage);
    return { userMessage, botReply };
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: { messages: [] },
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({ type: "user", text: action.payload });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendMessageToBot.fulfilled, (state, action) => {
      state.messages.push({ type: "user", text: action.payload.userMessage });
      state.messages.push({ type: "bot", text: action.payload.botReply });
    });
  },
});

export const { addUserMessage } = chatSlice.actions;
export default chatSlice.reducer;
