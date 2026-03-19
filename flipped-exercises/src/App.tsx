import React from 'react'
import { Profile } from './components/Profile'
import { TeamCard } from './components/TeamCard'

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-col items-center">
      
      <h1 className="text-2xl font-bold mb-8 text-slate-700">
        Welcome to React!
      </h1>

      <Profile name="Your Name" role="Junior Developer" />

      <div className="flex gap-4 mt-8">
        <TeamCard name="Bart Simpson" role="Son" />
        <TeamCard name="Lisa Simpson" role="Daughter" />
        <TeamCard name="Maggie Simpson" role="Daughter" />
        <TeamCard name="Marge Simpson" role="Mother" />
        <TeamCard name="Homer Simpson" role="Father" />
      </div>

    </div>
  )
}