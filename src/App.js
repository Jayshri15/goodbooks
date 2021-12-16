import React from "react";
import "./styles.css";
import { useState } from "react";

const goodbook = {
  Polity: [
    { name: "Indian Polity by M Laxmikant", rating: "5/5" },
    { name: "Indian Governance by M Laxmikant", rating: "4.5/5" },
    { name: "Indian Constitution by D D Basu", rating: "4.5/5" }
  ],
  International_Relation: [
    { name: "Globalization of World Politics by smith & Bylis", rating: "5/5" },
    { name: "Global Politics by Andrew Hywood", rating: "5/5" },
    { name: "Clash Of Civilization by Samuel P Huntington", rating: "4/5" }
  ],
  History: [
    {
      name: "Freedom struggle of Indian Independance by Bipin Chandra",
      rating: "4.5/5"
    },
    { name: "Ancient India by Lewis H. Morgan", rating: "4/5" }
  ]
};

export default function App() {
  const [selectGenre, setGenre] = useState("History");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📒GoodBooks📖</h1>
      <p>
        Checkout my favorite books of below genre. Select a genre to know my
        favorite books of that genre.
      </p>
      <div>
        {Object.keys(goodbook).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#FEE2E2",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div id="div" style={{ textAlign: "centre" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {goodbook[selectGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "3px solid #FEE2E2",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              {""}
              <div style={{ fontSize: "larger", textAlign: "center" }}>
                {book.name}
              </div>
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
