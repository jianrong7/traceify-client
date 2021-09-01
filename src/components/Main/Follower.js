import React, { useState, useEffect } from 'react'

export default function Follower({ userData }) {
  const [followerCount, setFollowerCount] = useState(null);
  
  useEffect(() => {
    if (!userData) { return }
    if (userData.followers.total > 1000000) {
      setFollowerCount(Math.round((userData.followers.total / 1000000) * 10) / 10 + ' M')
    } else if (userData.followers.total > 1000) {
      setFollowerCount(Math.round((userData.followers.total / 1000) * 10) / 10 + ' K')
    } else { setFollowerCount(userData.followers.total) }
  }, [userData])

  if (!userData) return null
  return (
    <div className="bg-green-50 w-5/12 items-center flex flex-col text-center rounded p-2">
      <span className="text-green-800 font-semibold text-sm">Followers</span>
      <span className="text-green-800 font-bold text-3xl mt-3">{followerCount}</span>
    </div>
  )
}
