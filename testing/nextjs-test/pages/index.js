import { useState } from "react";

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <h1>Home page</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter random text</label>
        <input id="randomText" />
      </div>
      <div>
        <input id="specificText" placeholder="search..." />
      </div>
      <div>
        <input id="specificText" value="audio" />
      </div>
      <div>
        <span>This the text</span>
        {showText ? <h1>Suprise text</h1> : null}
        <button onClick={() => setShowText(!showText)}>Show text</button>
      </div>
    </div>
  );
}
