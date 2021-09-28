import { useState } from "react";
import "./styles.css";

const sports = {
  Football: [
    { name: "Robert Lewandowski | Bayern Munich", score: "41", matches: "82" },
    { name: "Lionel Messi | Barcelona ", score: "30", matches: "60" },
    { name: "Cristiano Ronaldo | Juventus", score: "29", matches: "58" }
  ],
  Cricket: [
    { name: "JE Root (ENG)	", score: "1455", matches: "12" },
    { name: "RG Sharma (INDIA)", score: "906", matches: "11" },
    { name: "RR Pant (INDIA)", score: "706", matches: "706" }
  ],
  IPL: [
    { name: "KL Rahul (PBKS)", score: "670", matches: "14" },
    { name: "S Dhawan", score: "618", matches: "17" },
    { name: "DA Warner", score: "548", matches: "16" }
  ]
};

export default function App() {
  var sportsLists = Object.keys(sports);

  var [userInput, setUserInput] = useState("Cricket");

  function sportsTeams(team) {
    setUserInput(team);
  }

  return (
    <div className="App">
      <h1>2020-21 Sports Player Status App</h1>
      <p>Check out the top 3 playes in Football, Cricket and Hockey Sports</p>
      <h3>
        {sportsLists.map((team) => {
          return (
            <button onClick={() => sportsTeams(team)} key={team}>
              {team}
            </button>
          );
        })}
      </h3>

      <ul>
        {sports[userInput].map((e) => {
          return (
            <div key={e.name}>
              <section className="playerProfile">
                <div className="team">
                  <h3>Name : {e.name}</h3>
                  <p> Sores : {e.score}</p>
                  <p> Matches : {e.matches}</p>
                </div>
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
