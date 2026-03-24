import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BaseType } from "./UserList";

export function UserProfile() {
    const { id } = useParams();
    const [user, setUser] = useState<BaseType | null>(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUsers(Data))
        .catch((err) => console.error(err));
    }, [id]);

    if (!user) return <p className="p-8">Loading...</p>;

    return (
        <div className="p-8">
      <h2 className="text-2xl font-bold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
    );
}