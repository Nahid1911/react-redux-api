import React, { useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./redux/users/usersSlice";


const Users = () => {
    const { users, isLoading, error } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch, fetchUsers])

if (isLoading) {
    return <div>Loading.....</div>
}

if (error) {
    return <div>Error: {error}</div>
}

return (
    <ul>
        {users.map (user => (
            <li key={user.id}>
                {user.name.first} {user.name.last}
            </li>
        ))}
    </ul>
)
    
}

console.log(fetchUsers);
export default Users;