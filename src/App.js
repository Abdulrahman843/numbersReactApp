import React, { useState } from "react";
import "./App.css";

/*
  The App component defines the main functionality of our Numbers Trivia app.
  It allows the user to:
  1. Input a number.
  2. Fetch a trivia fact about that number using the Numbers API.
  3. Display the fetched fact or an error if something goes wrong.
*/
function App() {
  // number: holds the user-input value
  // fact: holds the fetched fact (or any error message)
  const [number, setNumber] = useState("");
  const [fact, setFact] = useState("");

  /*
    handleFetchFact:
    1. Validates that the user has entered a number.
    2. Sends a fetch request to the Numbers API (using JSON format).
    3. If the response is successful, updates 'fact' with the API's text.
    4. If there's an error (HTTP or otherwise), catches it and updates 'fact' with an error message.
  */
  const handleFetchFact = async () => {
    if (!number) {
      setFact("Please enter a valid number.");
      return;
    }

    try {
      // Using the JSON endpoint ensures the response is in JSON format
      const response = await fetch(`http://numbersapi.com/${number}?json`);
      // Check if we received a successful (2xx) HTTP status
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      // Parse the JSON response
      const data = await response.json();
      // Update the fact state with the text from the response
      setFact(data.text);
    } catch (error) {
      // If something went wrong, display a custom error message
      setFact(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="app-container">
      <h1>Numbers Trivia</h1>

      {/* Input for entering the number and button for triggering the fetch */}
      <div className="input-section">
        <input
          type="number"
          placeholder="Enter a number..."
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleFetchFact}>Get Fact</button>
      </div>

      {/* This section displays the fetched fact or any error messages */}
      <div className="result">
        {fact && <p>{fact}</p>}
      </div>
    </div>
  );
}

export default App;