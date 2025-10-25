const axios = require("axios");

async function ask(question) {
  try {
    const res = await axios.post(
      "http://localhost:11434/api/generate",
      { model: "tinyllama:latest", prompt: question, max_tokens: 100 },
      { headers: { "Content-Type": "application/json" }, responseType: "stream" }
    );

    let answer = "";

    res.data.on("data", chunk => {
      chunk.toString().split("\n").forEach(line => {
        if (line) {
          try {
            const parsed = JSON.parse(line);
            if (parsed.response) answer += parsed.response;
          } catch {}
        }
      });
    });

    res.data.on("end", () => console.log("AI:", answer));
  } catch (err) {
    console.error(err.message);
  }
}

ask("why so many woman?");





::::::::::::::::: --------------------->>>>>::::::::::::


require('dotenv').config();
const axios = require("axios");
const nodemailer = require("nodemailer");
const readline = require("readline");

// Terminal input
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const API_URL = "http://localhost:11434/api/generate";
const MODEL = "tinyllama:latest";

// Setup Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Ask TinyLLaMA AI
async function askAI(question) {
  try {
    const res = await axios.post(API_URL, { model: MODEL, prompt: question, max_tokens: 150 }, 
      { headers: { "Content-Type": "application/json" }, responseType: "stream" });

    let answer = "";
    return new Promise((resolve) => {
      res.data.on("data", chunk => {
        chunk.toString().split("\n").forEach(line => {
          if (line) {
            try {
              const parsed = JSON.parse(line);
              if (parsed.response) answer += parsed.response;
            } catch {}
          }
        });
      });
      res.data.on("end", () => resolve(answer));
    });

  } catch (err) {
    console.error("AI Error:", err.message);
    return "";
  }
}

// Send email
async function sendEmail(to, subject, text) {
  try {
    await transporter.sendMail({ from: process.env.EMAIL_USER, to, subject, text });
    console.log("Email sent!");
  } catch (err) {
    console.error("Email Error:", err.message);
  }
}

// Prompt user
function promptUser() {
  rl.question("You (ask AI to draft email or type 'exit'): ", async (input) => {
    if (input.toLowerCase() === "exit") {
      rl.close();
      process.exit(0);
    } else {
      const aiText = await askAI(input);
      console.log("\nAI Draft:\n", aiText);

      rl.question("\nSend this email? (yes/no): ", async (ans) => {
        if (ans.toLowerCase() === "yes") {
          rl.question("Recipient Email: ", async (to) => {
            rl.question("Subject: ", async (subject) => {
              await sendEmail(to, subject, aiText);
              promptUser();
            });
          });
        } else {
          promptUser();
        }
      });
    }
  });
}

console.log("TinyLLaMA AI Email Agent (type 'exit' to quit)");
promptUser();
