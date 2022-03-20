import React from 'react';
import TodosList from './components/TodosList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div>
      <UsersList />
      <br />
      <br />
      <TodosList />
    </div>
  );
}

export default App;
