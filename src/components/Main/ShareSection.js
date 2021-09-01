import React, { useEffect, useState } from 'react';
import share from '../assets/share.png';
import Popup from './Popup';

export default function ShareSection() {
  const [showPopup, setShowPopup] = useState(false);

  const copy = () => {
    var text = "http://localhost:3000";
    navigator.clipboard.writeText(text).catch(err => console.log(err))
    setShowPopup(prev => !prev)
  }

  useEffect(() => {
    if (showPopup) {
      const timeout = setTimeout(() => setShowPopup(prev => !prev), 500);
      return () => { clearTimeout(timeout) }
    }
  }, [showPopup])

  return (
    <div>
      <div className="h-20 m-4 border-dashed border-2 rounded-md">
        <button className="min-w-full min-h-full px-3" onClick={copy}>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row items-center">
              <img src={share} alt='share' className="h-4" />
              <p className="flex flex-col items-start mx-3">
                <span>Stay safe together.</span>
                <span>Share the site!</span>
              </p>
            </div>
            <span>&gt;</span>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center">
        {showPopup ? <Popup />: null}
      </div>
    </div>
  )
}
