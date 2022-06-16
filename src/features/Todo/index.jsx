import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch()
    return (
        <div>
           <Switch>
               <Route path={match.path} component={ListPage} exact />
               <Route path={`${match.path}/:todoId`} component={DetailPage} />
           </Switch>
        </div>

    );
}

export default TodoFeature;