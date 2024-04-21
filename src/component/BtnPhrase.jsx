import React from "react";
import quotes from "../utils/phrases.json";
import getNumRandom from "../utils/getNumRandom";
import photos from "../utils/photos.json";

const BtnPhrase = ({ setPhrase, setphoto }) => {
  const changePhrase = () => {
    const indexRandom = getNumRandom(quotes.length);

    setPhrase(quotes[indexRandom]);

    setphoto(photos[getNumRandom(photos.length)]);
  };

  return (
    <button
      onClick={changePhrase}
      className="overflow-hidden  w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
    >
      Next phrase
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
        Move it
      </span>
    </button>
  );
};

export default BtnPhrase;
