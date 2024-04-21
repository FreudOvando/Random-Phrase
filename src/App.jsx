import { useState } from "react";
import "./App.css";
import quotes from "./utils/phrases.json";
import getNumRandom from "./utils/getNumRandom";
import Randomquote from "./component/Randomquote";
import BtnPhrase from "./component/BtnPhrase";
import photos from "./utils/photos.json";
import Footer from "./component/Footer";

function App() {
  const indexRandom = getNumRandom(quotes.length);

  const [phrase, setPhrase] = useState(quotes[indexRandom]);

  const [photo, setphoto] = useState(photos[getNumRandom(photos.length)]);

  const objStyle = {
    backgroundImage: `url(/fortuna-1/fondo${photo}.jpg)`,
  };

  return (
    <div
      style={objStyle}
      className="min-h-screen flex justify-center items-center flex-col bg-cover bg-center"
    >
      <h1 className="text-3xl box flex m-5 p-2 font-serif font-bold text-zinc-300">
      Motivation Phrase
      </h1>

      <article className="max-w-md p-6 bg-black opacity-80 rounded-xl  ">
        <Randomquote phrase={phrase} />
      </article>

      <section className="m-10 p-2 ">
      <BtnPhrase  setPhrase={setPhrase} setphoto={setphoto} />
      </section>

      <footer>
< Footer />
      </footer>
    </div>
  );
}

export default App;
