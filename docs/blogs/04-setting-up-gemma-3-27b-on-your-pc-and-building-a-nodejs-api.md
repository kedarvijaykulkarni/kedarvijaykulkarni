# Setting Up Gemma 3:27B on Your PC and Building a Node.js API to Interact with It

**Author:** Kedar Kulkarni
**Date:** March 23, 2025
**Source:** https://www.linkedin.com/pulse/setting-up-gemma-327b-your-pc-building-nodejs-api-kedar-kulkarni-e5h7f

---

## Introduction

Large language models (LLMs) are becoming increasingly powerful, enabling developers to build AI-driven applications locally without relying on cloud services. Gemma 3:27B, a state-of-the-art model, can be run efficiently on your PC using Ollama, an open-source framework designed for local model execution.

In this article, we'll walk through the setup of Gemma 3:27B on a PC and how to create a Node.js API to send requests via a POST method.

## Step 1: Install Ollama

Ollama is required to run Gemma 3:27B locally. Follow these steps:

**1. Download and Install Ollama**

Visit the Ollama website and download the latest version for your OS (Windows, macOS, or Linux). Follow the installation instructions.

**2. Pull the Gemma 3:27B Model**

After installation, open a terminal and run:

```
ollama pull gemma3:27b
```

This command downloads and sets up the model on your system.

**3. Verify the Model is Running**

You can test the model by running:

```
ollama run gemma3:27b "Hello, how are you?"
```

If you get a response, the model is working correctly.

## Step 2: Create a Node.js API

Now, let's build a simple Node.js API that sends requests to the locally running Gemma 3:27B model.

**1. Initialize a New Node.js Project**

Create a new project folder and initialize it:

```
mkdir gemma-node-api
cd gemma-node-api
npm init -y
```

**2. Install Dependencies**

We need Express for the server and Axios to interact with Ollama's API:

```
npm install express axios
```

**3. Create the API Server**

Create a new file called `server.js` and add the following code:

```javascript
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const userPrompt = req.body.prompt;

    if (!userPrompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "gemma3:27b",
      prompt: userPrompt,
      stream: false,
    });

    res.json({ response: response.data.response });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to get response from Ollama" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

**4. Start the Server**

Run the following command:

```
node server.js
```

This will start a local API at `http://localhost:3000`.

**5. Test the API**

You can send a POST request using cURL, Postman, or JavaScript:

```
curl -X POST "http://localhost:3000/chat" -H "Content-Type: application/json" -d '{"prompt": "What is AI?"}'
```

Expected response:

```json
{
  "response": "AI stands for Artificial Intelligence, which refers to..."
}
```

## Conclusion

By following these steps, you've successfully:

1. Set up Gemma 3:27B on your PC using Ollama.
2. Built a Node.js API to send POST requests.

With this setup, you can now build AI-powered applications locally without relying on expensive cloud services.

Here is the GitHub Repository for the Node application:

https://github.com/kedarvijaykulkarni/ollama-node-app (please follow and star for further updates)

💡 **Next Steps:** Consider integrating this API using the latest React frontend, adding streaming responses, or optimizing memory usage for larger models.

What are you building with LLMs? Let me know in the comments! 🚀

`#AI #MachineLearning #Gemma #Ollama #NodeJS #LLM #Coding #WebDevelopment #Tech`
