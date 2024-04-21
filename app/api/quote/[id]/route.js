import { connectToDB } from "@utils/database";
import Quote from "@models/quote";

// GET quote by id
export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const quote = await Quote.findById(params.id).populate("creator");

    if (!quote) {
      return new Response("Quote not found", { status: 404 });
    }

    return new Response(JSON.stringify(quote), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all quotes.", { status: 500 });
  }
};

// PATCH quote (update)
export const PATCH = async (request, { params }) => {
  const { quote, author, tag } = await request.json();

  try {
    await connectToDB();

    const existingQuote = await Quote.findById(params.id);

    if (!existingQuote) {
      return new Response("Quote not found", { status: 404 });
    }

    existingQuote.quote = quote;
    existingQuote.author = author;
    existingQuote.tag = tag;

    await existingQuote.save();

    return new Response(JSON.stringify(existingQuote), { status: 200 });
  } catch (error) {
    return new Response("Failed to update the quote", { status: 500 });
  }
};

// DELETE quote
export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Quote.findByIdAndDelete(params.id);

    return new Response("Quote deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete the quote", { status: 500 });
  }
};
