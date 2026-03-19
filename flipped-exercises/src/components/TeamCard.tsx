import { useState } from 'react'

interface CardProps {
  name: string
  role: string
}

export function TeamCard({ name, role }: CardProps) {
  const [votes, setVotes] = useState(0)

  return (
    <div className="rounded-xl bg-white p-4 shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-500">{role}</p>
      <p className="mt-2">Votes: {votes}</p>
      <button
        className="mt-3 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={() => setVotes(votes + 1)}
      >
        Vote
      </button>
    </div>
  )
}