import { useEffect, useState } from "react";
import "./Quote.css";

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
          <p className="para">{randomQuote}</p>
          <button onClick={generateRandomeQuote} className="btn btn-dark">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Quote;
