import React from "react";

import { useGetQuotes } from "../../hooks/useGetQuotes";
import { Fade } from "../Fade/Fade";
import "./RandomQuotePage.css";

export const RandomQuotePage = () => {
  const { quotes } = useGetQuotes();
  console.log(JSON.stringify(quotes, null, 2))
  return (
    <>
      {quotes.map(({ background, text }, index) => (
        <Fade show={quotes.length - 1 === index} key={text}>
          <div className="quote-wrap" style={{ backgroundImage: `url(${background})` }}>
            <div className="quote-text">{text}</div>
          </div>
        </Fade>
      ))}
    </>
  );
};
