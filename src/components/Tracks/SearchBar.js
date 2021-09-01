import React from 'react'

export default function SearchBar({ setSearchValue }) {
  return (
    <div className="p-3">
      <span>Check in to:</span>
      <form>
        <input 
        type="text"
        onChange={(e) => setSearchValue(e.target.value)} 
        // ref={forwardedRef}
        placeholder='Search from list below'
        className="border-2 rounded-md p-2 w-full my-2"
        />
      </form>
    </div>
  )
}
