import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import {register} from 'features/Auth/userSlice'
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

Register.propTypes= {
    closeDialog: PropTypes.func,
}
   

function Register(props) {
    const dispatch= useDispatch()
    const { enqueueSnackbar } = useSnackbar();
   
    const  handleSubmit = async (values) =>{
      try {
        values.username =values.email;
        const action = register(values);
        const resultAction =  dispatch(action);
        unwrapResult(resultAction);

        const {closeDialog} =props;
      
        if(closeDialog){
            closeDialog();
        }
        enqueueSnackbar('Register suceessfully', {variant: 'success'})
      } catch (error) {
        console.log(error)
      }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;