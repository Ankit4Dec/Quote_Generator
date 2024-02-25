import { useEffect, useState } from "react";
import "./Quote.css";
import { ColorRing } from "react-loader-spinner";

const Quote = () => {
  const [randomQuote, setRandomeQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generateRandomeQuote();
  }, []);

  const generateRandomeQuote = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.quotable.io/random");
      const { content, author } = await response.json();
      const selectedQuote = `${content} - ${author}`;
      setRandomeQuote(selectedQuote);
    } catch (error) {
      console.error("Error fetching qoute:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="landing-section">
      <div className="row-container">
        <div className="quote-div">
          <h1 className="landing-heading">Random Quotes</h1>
          {loading ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            <>
              <p className="para">{randomQuote}</p>
              <button onClick={generateRandomeQuote} className="btn btn-dark">
                Get Quote
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quote;
