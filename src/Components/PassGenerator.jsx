import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(20);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  const generatePassword = () => {
    let charPool = "";
    if (includeUpper) charPool += upperCase;
    if (includeLower) charPool += lowerCase;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;

    if (charPool === "") {
      alert("Please select at least one option!");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length);
      newPassword += charPool[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div>
      <h2>Password Generator</h2>

      <div>
        <input type="text" value={password} readOnly />
        <button onClick={copyPassword}>Copy</button>
      </div>

      <div>
        <label>Password Length: </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          min="4"
          max="50"
        />
      </div>

      <div>
        <label>Include uppercase letters</label>
        <input
          type="checkbox"
          checked={includeUpper}
          onChange={() => setIncludeUpper(!includeUpper)}
        />{" "}
      </div>

      <div>
        <label>Include lowercase letters</label>
        <input
          type="checkbox"
          checked={includeLower}
          onChange={() => setIncludeLower(!includeLower)}
        />
      </div>

      <div>
        <label>Include numbers</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />{" "}
      </div>

      <div>
        <label>Include symbols</label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
      </div>

      <button onClick={generatePassword}>Generate Password</button>
    </div>
  );
};

export default PasswordGenerator;
