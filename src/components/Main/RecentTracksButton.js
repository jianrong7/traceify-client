import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function RecentTracksButton({ term }) {
  const [buttonText, setButtonText] = useState('');
  const [buttonNumber, setButtonNumber] = useState(0);

  useEffect(() => {
    if (term === 'short_term') {
      setButtonText('Past month');
      setButtonNumber(1);
    } else if (term === 'medium_term') {
      setButtonText('Past 6 months');
      setButtonNumber(6);
    } else {
      setButtonText('All time');
      setButtonNumber(12);
    }
  }, [])

  return (
    <div className="w-3/12 flex flex-col justify-center text-center items-center">
      <Link to={`/tracks/${term}`} className="flex flex-col min-w-max">
        <span className="font-bold text-3xl text-blue-700">{buttonNumber}</span>
        <span className="font-semibold text-sm">{buttonText}</span>
      </Link>
    </div>
  )
}
