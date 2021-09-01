import React from 'react';
import { useHistory } from 'react-router-dom';
import back_arrow from '../assets/right-arrow.png';

export default function Header() {
  const history = useHistory();

  return (
    <div className="py-4 px-6">
      <button onClick={() => history.push("/")}>
        <img 
        src={back_arrow} alt="back_arrow" 
        className="h-5 w-4"
        />
      </button>
    </div>
  )
}
