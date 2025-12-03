'use server';

const convertText = async (prevState, formData) =>{

    const sentence = formData.get('normalText');

    // const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${process.env.GROQ_AI_KEY}`
    //     },
    //     body: JSON.stringify({
    //         messages: [{
    //                 role: "user",
    //                 content: `Convert the following sentence to emojis, and try to use more emojis to be more descriptive. Ensure that you are only using emojis: ${sentence}`,
    //             }],
    //         model: "openai/gpt-oss-20b"
    //     })
    // })

    // const result = await res.json();

    // const resData = {
    //     sentence,
    //     content: result.choices[0].message.content,
    //     reasoning: result.choices[0].message.reasoning
    // }

    const resData = {
        sentence,
        content: "🙋‍♂️🍔🍽️😋🥳👀",
        reasoning: "test"
    }

    return resData;
}

 
export default convertText;