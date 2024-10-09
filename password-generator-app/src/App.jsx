import { useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [symAllowed, setSymAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-pink-200 text-pink-700">
      <h1 className="text-pink-700 text-center font-medium my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className="outline-none bg-pink-400 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => setNumAllowed((prevNumAllowed) => !prevNumAllowed)}
            name=""
            id=""
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={symAllowed}
            onChange={() => setSymAllowed((prevSymAllowed) => !prevSymAllowed)}
            name=""
            id=""
          />
          <label htmlFor="symbols">Symbols</label>
        </div>
      </div>
    </div>
  );
}

export default App;
