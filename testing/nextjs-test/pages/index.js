export default function Home() {
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
    </div>
  );
}
