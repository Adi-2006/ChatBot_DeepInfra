export const fetchBotResponse = async (message) => {
    try {
      console.log("User Message:", message);
  
      const response = await fetch("https://api.deepinfra.com/v1/openai/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_DEEPINFRA_API_KEY}`,
        },
        body: JSON.stringify({
          model: "meta-llama/Meta-Llama-3-8B-Instruct", // Free GPT-4 Equivalent Model
          messages: [{ role: "user", content: message }],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });
  
      const data = await response.json();
      console.log("Full API Response:", data);
  
      if (!data || !data.choices || !data.choices.length) {
        throw new Error("Invalid response from API");
      }
  
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error fetching bot response:", error);
      return "Sorry, I couldn't process that request.";
    }
  };
  