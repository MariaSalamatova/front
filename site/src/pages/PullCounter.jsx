import React, { useState, useEffect } from "react";
import "./PullCounter.css";

const PullCounter = () => {
  const allCharacters = [
    "Druvis III",
    "Lilya",
    "A Knight",
    "Sotheby",
    "Regulus",
    "Centurion",
    "An An Lee",
    "Medicine Pocket",
    "Voyager",
    "Eternity",
    "Ms NewBabel",
    "Melania",
    "Pickles",
    "Tooth Fairy",
    "Jessica",
    "Kaalaa Baunaa",
    "Shamane",
    "37",
    "6",
    "Spathodea",
    "Ezra Theodore",
    "Ge Tian",
    "Isolde",
    "Marcus",
    "Vila",
    "Windsong",
    "Kakania",
    "Semmelweis",
    "Mercuria",
    "J",
    "Tuesday",
    "Argus",
    "Lopera",
    "Willow",
    "Flutterpage",
    "Barcarola",
    "Fatutu",
    "Noire",
    "Recoleta",
    "Jiu Niangzi",
    "Lucy",
    "Anjo Nala",
    "Liang Yue",
  ];
  const limitedOnly = new Set([
    "Jiu Niangzi",
    "Lucy",
    "Anjo Nala",
    "Liang Yue",
  ]);

  const bannerCharacters = {
    limited: [],
    event: [],
    rerun: [],
  };
  return (
    <div>
      <section className="enter-data">
        <button id="open-form">Enter pull result</button>

        <div id="pull-form">
          <label>Select Banner:</label>
          <br />
          <select id="banner-select">
            <option value="">-- Choose Banner --</option>
            <option value="limited">Limited banner</option>
            <option value="event">Event banner</option>
            <option value="rerun">Rerun banner</option>
            <option value="yearing">Yearing of the water</option>
            <option value="ripples">Ripples on the water</option>
          </select>
          <br />
          <br />

          <label>Select Character:</label>
          <br />
          <select id="character-select">
            <option value="">-- Choose Character --</option>
          </select>
          <br />
          <br />

          <label>Enter Pull Number:</label>
          <br />
          <input type="number" id="pull-number" min="1" max="100" />
          <br />
          <br />

          <button id="add-pull">Add</button>
        </div>
      </section>

      <section className="banner-list">
        <ul>
          <li>
            <h2>Limited banner</h2>
            <img src="banners/Liang Yue banner.jpg" alt="banner" />
            <div className="characters" id="chars-limited"></div>
          </li>

          <li>
            <h2>Event banner</h2>
            <img src="banners/Recoleta banner.jpg" alt="banner" />
            <div className="characters" id="chars-event"></div>
          </li>

          <li>
            <h2>Rerun banner</h2>
            <img src="banners/Tuesday banner.jpg" alt="banner" />
            <div className="characters" id="chars-rerun"></div>
          </li>

          <li>
            <h2>Yearing of the water</h2>
            <img src="banners/yearing of the water.png" alt="banner" />
            <div className="characters" id="chars-yearing"></div>
          </li>

          <li>
            <h2>Ripples on the water</h2>
            <img src="banners/ripples on the water.jpg" alt="banner" />
            <div className="characters" id="chars-ripples"></div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PullCounter;
