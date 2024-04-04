import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
          <h1 className="head_text text-center">
            Explore and Share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> Various Quotes</span>
          </h1>
          <p className="desc text-center">
            Kueris lets you find and post quotes of various origins. They may be
            from famous people of the past or your own thoughts. There is no limit,
            choose whichever suits you!
          </p>
    
          <Feed />
        </section>
      );
}

export default Home