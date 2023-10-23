import { cli } from 'cleye';
import { outro, text, spinner } from '@clack/prompts';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

const argv = cli({
  name: 'index.js',
  parameters: [
    '[arguments...]', 
  ],
})

const chatHistory = [];

let prompt = argv._.arguments.join(' ');

if(prompt !== ""){
  const spinner = spinner();
  spinner.start("Thinking...");

  const response = await getResponse(chatHistory)
  
  spinner.stop("Got response");

  console.log(response)
}

async function getResponse(chatHistory){
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: chatHistory,
  })

  return completion.choices[0].message.content
}

async function promise(){
  const userPromptText = await text({
    message: "What do you want to say?",
    placeholder: `send a message (type 'exit' to quit)`,
    validate: (value) => {
      if(!value) return "please enter a valid prompt"
    }
  })

  if(userPromptText === 'exit'){
    outro("By, thanks for chatting with us")
    process.exit(0)
  }
  const waitSpinner = spinner();
  waitSpinner.start("Thinking...");

  chatHistory.push({
    role: 'user',
    content: userPromptText
  })
  
  const generatedText = await getResponse(chatHistory)

  waitSpinner.stop("Generation finished")

  console.log(generatedText)
  console.log("\n\n")

  chatHistory.push({
    role: 'system',
    content: generatedText
  })
  
  promise();
}

promise();
