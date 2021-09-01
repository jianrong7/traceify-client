import React from 'react';
import share from '../assets/share.png';

export default function ShareSection() {
  const copy = () => {
    var text = "http://localhost:3000";
    navigator.clipboard.writeText(text).then(function() {
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  }

  return (
    <div className="h-20 m-4 border-dashed border-2 rounded-md">
      <button className="min-w-full min-h-full px-3" onClick={copy}>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center">
            <img src={share} alt='share' className="h-5" />
            <p className="flex flex-col items-start mx-2">
              <span>Stay safe together.</span>
              <span>Share the site!</span>
            </p>
          </div>
          <span>&gt;</span>
        </div>
      </button>
    </div>
  )
}
