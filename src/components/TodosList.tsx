import React, { FC, useEffect } from 'react';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const TodosList: FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todoReducer
  );

  const { fetchTodosCreator, setTodoPage } = useAction();

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodosCreator(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} -- {todo.title}
          </div>
        );
      })}{' '}
      <div style={{ display: 'flex' }}>
        {pages.map((p) => {
          return (
            <div
              key={p}
              onClick={() => setTodoPage(p)}
              style={{
                border: p === page ? '2px solid green' : '1px solid grey',
                padding: '0.5rem 1rem',
              }}
            >
              {p}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodosList;
