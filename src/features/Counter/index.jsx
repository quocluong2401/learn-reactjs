import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';



function CounterFeature(props) {
    const count = useSelector( (state) => state.counter)
    console.log(count)
    const dispath = useDispatch()
    const handleIncrease = ()=>{
        const action = increase();
        console.log(action)
        dispath(action)
    }
    const handleDecrease = ()=>{
        const action = decrease();
        console.log(action)
        dispath(action)
    }
    return (
        <div>
            Counter: {count}
            <div>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;