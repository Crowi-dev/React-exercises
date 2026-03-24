import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

export interface BaseType {
    id: number;
    name: String;
    phone: number;
    email: String;
}

export function UserList() {
  const [users, setUsers] = useState<BaseType[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      <div className="grid grid-cols-2 gap-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-x1 shadow">
            <h3 className="font-semibold">{user.name}</h3>
            <p>{user.email}</p>

            <link
            to={`/user/${user.id}`}
            className="text-blue-500 underline mt-2 inline-block"
            >
              View Profile
            </link>
          </div>
        ))}
      </div>
    </div>
  );
}