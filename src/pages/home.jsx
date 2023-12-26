import React, { useState, useEffect } from "react";
import styles from "./home.module.css";

function Home() {

  const [quote, setQuote] = useState("");

  //run the api call after 1 minute
  setInterval(setQuote, 60 * 1000);

  useEffect(()=>{ 
    setQuote((quote) => {

    // get quote index number from random number generator
    function getRandomNumber(min, max) {
      return Math.floor(Math.random()) * (max - min) + min;
    };
    let index = getRandomNumber(0, 15);

    // fetch quotes for api
    if (index <= 15){quote = (() => {
      fetch("https://type.fit/api/quotes")
        .then((response) => {
          return response.json()
        })
        .then((data) => { console.log(data[index]);
          return data[index] 
          }
        )
        return quote
    });}
    else { 
      return quote =  "No quotes find error"
     };


  });
}, [])


  return (
    <div className={styles.homepageBackground}>
      <div className={styles.motivationalQuoteWrapper}>
        <p className={styles.quote}>
          {quote}
        </p>
      </div>
      {/* <div className={styles.mukundaMottoWrapper}>
        <p className={styles.motto}>
          Mukunda is a one-stop-center for all freelance and full-time Tech jobs
          in the country
        </p>
      </div> */}
      <div className={styles.searchBarWrapper}>
        <input type="search" placeholder="search here" className={styles.jobtype} />
        <select className={styles.jobLocation}>
          <option value="">select location</option>
          <option value="">Harare</option>
          <option value="">Mutare</option>
          <option value="">Bulawayo</option>
          <option value="">Rusape</option>
          <option value="">Victoria Falls</option>
        </select>
        <button type="submit" className={styles.jobSearch}>Search</button>
      </div>
    </div>
  );
}

export default Home;
