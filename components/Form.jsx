import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex justify-start items-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your interesting quote!
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        {/* Quote field */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your Quote
          </span>
          <textarea
            value={post.quote}
            onChange={(e) => setPost({ ...post, quote: e.target.value })}
            placeholder="Write your quote here..."
            required
            className="form_textarea"
          />
        </label>
        {/* Author field */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Author{" "}
            <span className="font-normal">
              (author name, original source etc)
            </span>
          </span>
          <input
            value={post.author}
            onChange={(e) => setPost({ ...post, author: e.target.value })}
            placeholder="Who is the original author of this quote?"
            required
            className="form_input"
          />
        </label>
        {/* Tag field */}
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              (#philosophy, #history, #movies, #literature etc)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex justify-end items-center mx-3 mb-5 gap-4">
          <Link href="/" className="px-5 py-1.5 text-white rounded-full text-md bg-gray-500 opacity-75 hover:opacity-100">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-md bg-blue-500 rounded-full text-white opacity-75 hover:opacity-100"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
