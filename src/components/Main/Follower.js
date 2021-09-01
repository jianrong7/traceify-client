import React from 'react'

export default function Follower({ userData }) {
  console.log(userData)
  if (!userData) return null
  return (
    <div className="bg-green-50 w-5/12 items-center flex flex-col text-center rounded p-2">
      <span className="text-green-800 font-semibold text-sm">Followers</span>
      <span className="text-green-800 font-bold text-3xl mt-2">{userData.followers.total}</span>
    </div>
  )
}
