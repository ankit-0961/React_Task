import React, { useState } from "react";

const PasswordProject = () => {
  const [length, setLength] = useState(30);
  const [includeupper, setincludeupper] = useState(true);
  const [includelower, setincludelower] = useState(true);
  const [includenumber, setincludenumber] = useState(true);
  const [includesymbol, setincludesymbol] = useState(true);
  // const [length, setLength] = useState(30);
  // const [length, setLength] = useState(30);
  return (
    <div>
      <h2>Password Generator</h2>
    </div>
  );
};

export default PasswordProject;
