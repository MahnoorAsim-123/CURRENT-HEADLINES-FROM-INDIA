import React from 'react';
import NoResults from "./assets/notFound.png";

const ApiExpired = () => {
  return (
    <>
      <div className="notresultfound">
        <img src={NoResults} alt="notresultfound" />
      </div>
      <h1 className='errorMsg'>API IS EXPIRED</h1>
      <div className="info">
        <p>SORRY! It seems you hit more than limited offer.
          You have minimum 50 turns to hit or search top headlines news
          or may be your api has ben expired.</p>
      </div>
    </>
  )
}

export default ApiExpired;