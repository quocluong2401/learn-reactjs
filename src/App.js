import Header from 'components/Header';
import AlbumFeature from 'features/Album';
import TodoFeature from 'features/Todo';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import productApi from './api/productApi';
const Title = styled.h1`
  text-aglin: center;
  font-weight: bold;

  color:${(props) => props.color || 'green'};
`;

function App() {

    useEffect ( () =>{
      const fetchProduct = async() =>{
        const params ={
          _limit: 10,
        }
        const productList = await productApi.getAll(params)
        console.log(productList);
      }
      fetchProduct()
    },[])

  return (
    <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={TodoFeature} exact />
          <Route path="/todos" component={TodoFeature} />
          <Route path="/albums" component={AlbumFeature} />
        </Switch> 
    </div>
  );
}

export default App;
