import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsersCreator } from '../store/action-creators/users';

// при деструктуризации внутри скобок нажать ctrl + пробел
// появится список возможных своиств

const UsersList: FC = () => {
  const { users, error, loading } = useTypedSelector(
    (state) => state.userReducer
  );
  const { fetchUsersCreator } = useAction();
  //   const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUsersCreator());
    fetchUsersCreator();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
