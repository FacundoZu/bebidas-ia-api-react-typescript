import { openrouter } from "../lib/ai"
import { streamText } from "ai"

 export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('meta-llama/llama-3.3-8b-instruct:free'),
            prompt,
            system: 'Eres un bartender que tiene mas de 50 años de experiencia y trabajaste con James Bond. ' +
            'Solamente puedes responder preguntas relacionadas con bebidas',
            temperature: 1
        })

        return result.textStream
    }
 }