import React from "react";

const Randomquote = ({ phrase }) => {
  return (
    <div>
      <p className="text-slate-100 font-bold italic mb text-2xl text-wrap m-2 p-2">{phrase.phrase}</p>
      <p className="text-slate-100 font-serif m-2 p-2 text-2xl text-wrap">{phrase.author}</p>
    </div>
  );
};

export default Randomquote;
