import { connectToDB } from "@utils/database";
import Quote from "@models/quote";

export const POST = async (req) => {
  const { userId, quote, author, tag } = await req.json();

  try {
    await connectToDB();
    const newQuote = new Quote({ creator: userId, quote, author, tag });

    await newQuote.save();

    return new Response(JSON.stringify(newQuote), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new quote.", { status: 500 });
  }
};
