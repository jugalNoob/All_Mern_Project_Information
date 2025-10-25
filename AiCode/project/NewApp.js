
const { OpenAI } = require("langchain/llms/openai");

const model = new OpenAI({ temperature: 0, modelName: "gpt-3.5-turbo" });

async function run() {
  const question = "What are the colors of the Indian flag?";
  const answer = await model.call(question);
  console.log("AI:", answer);
}

run();
