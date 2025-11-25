'use server';

const convertText = async (formData) =>{
    const sentence = formData.get('normalText');

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_AI_KEY}`
        },
        body: JSON.stringify({
            messages: [{
                    role: "user",
                    content: `Convert the following sentence to emojis: ${sentence}`,
                }],
            model: "openai/gpt-oss-20b"
        })
    })

    const result = await res.json();

    console.log(result.choices[0].message);
}


export default convertText;