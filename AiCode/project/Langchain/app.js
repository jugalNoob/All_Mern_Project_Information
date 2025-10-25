// 774b4dce4a47ffbf8f012bb92bfec155a719131c14f8365ee632ca602fd08cdd
// npm i @langchain/community --legacy-peer-deps



require('dotenv').config();

const  { ChatGoogleGenerativeAI } =require('@langchain/google-genai')
const { ChatPromptTemplate }=require('@langchain/core/prompts')

const googleApiKey = process.env.SerApi; // Your API key
const maxOutputTokens = 200;

const prompt = ChatPromptTemplate.fromTemplate(
  `Answer the following question to the best of your ability:\n{question}`
);

const model = new ChatGoogleGenerativeAI({
  model: "gpt-4o-mini",
  temperature: 0.7,
  maxOutputTokens,
  apikey: googleApiKey
});

async function ask(question) {
  const formattedPrompt = await prompt.format({ question });
  const response = await model.call(formattedPrompt);
  console.log("AI:", response);
}

// Example usage
ask("What are the colors of the Indian flag?");
