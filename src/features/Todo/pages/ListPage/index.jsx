import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [fillterStatus, setFillterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFillterStatus(params.status || 'all');
  }, [location.search]);
  const handleTodoList = (todo, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setFillterStatus('all');
    const queryParams = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedClick = () => {
    setFillterStatus('completed');
    const queryParams = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    setFillterStatus('new');
    const queryParams = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderTodoList = useMemo(() => {
    return todoList.filter((todo) => fillterStatus === 'all' || fillterStatus === todo.status);
  }, [todoList, fillterStatus]);
  const handleTodoFormSubmit = (values) =>{
    const newTodo ={
      id: todoList.length + 1,
      title:values.title,
      status: 'new'
    }
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList)
  }
  return (
    <div>
      <h3>Todo List</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoList} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
