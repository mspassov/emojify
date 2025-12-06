"use server";

const interpretEmojis = async (emojis) =>{

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_AI_KEY}`
        },
        body: JSON.stringify({
            messages: [{
                    role: "user",
                    content: `These emojis represent a sentence or phrase. Try to interpret them, and return only the sentence: ${emojis}`,
                }],
            model: "openai/gpt-oss-20b"
        })
    })

    const result = await res.json();

    const resData = {
        interpretation: result.choices[0].message.content,
        reasoning: result.choices[0].message.reasoning
    }

    return resData;

}

export default interpretEmojis;