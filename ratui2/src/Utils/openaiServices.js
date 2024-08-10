// src/openaiService.js

import OpenAI from 'openai';
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true // This is the default and can be omitted
  });


  export const fetchOpenAi = async (systemPrompt, userPrompt)=>{
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [systemPrompt, userPrompt],
      });
      const emailContent = response.choices[0].message.content;
      //console.log(response.choices[0].message.content)
      console.log(emailContent)

      return emailContent
  } 

