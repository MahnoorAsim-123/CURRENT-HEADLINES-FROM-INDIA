import React from 'react';
import NoResults from "./assets/notFound.png";

const NotFound = () => {
  return (
    <>
      <div className="notresultfound">
        <img src={NoResults} alt="notresultfound" />
      </div>
      <h1 className='errorMsg'>NO RESULTS FOUND</h1>
      <div className="info">
        <p>We couldn't find any matches. Check your search typo or use more
          generic terms or the news you're searching for may be dicontinued
          or not yet on our site.</p>
      </div>
    </>
  )
}

export default NotFound;