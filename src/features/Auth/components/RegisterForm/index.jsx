import PropTypes from 'prop-types';
// import InputField from '../../../../components/form-controls/inputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, LinearProgress } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputField from 'components/form-controls/inputField';
import PasswordField from 'components/form-controls/passwordField';
import { useForm } from 'react-hook-form';
import * as yup from "yup";


const useStyle = makeStyles(theme =>  ({
    root:{
        paddingTop: theme.spacing(2)
    },
    avarta:{
        margin:'0 auto',
        backgroundColor:theme.palette.secondary.main
    },

    title:{
        margin: theme.spacing(2,0,3,0),
        textAlign:'center'
    },

    submit:{
        margin: theme.spacing(3,0,2)
    },
    progress:{
        position:'absolute',
        top: theme.spacing(1),
        left:0,
        right:0
    }

}) );

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes= useStyle()
    const schema = yup.object().shape({
        fullName: yup.string()
                    .required('Please enter your full name')
                    .test('Should has at least two words','Please enter at least two words.',(value) =>{
                        console.log(value)
                        return value.split(' ').length >=2
                    }),
        email: yup.string()
                    .required('Please enter email')
                    .email('Please enter valid email'),
        password: yup.string().required('Please enter your password').min(6,'Please enter at least 6 characters') ,                      
        retypePassword: yup.string()
                    .required('Please retype your password')
                    .oneOf([yup.ref('password')],'Password does not match')            
    }); 

    const form = useForm({
        defaultValues:{
            fullName: '',
            email:'',
            password:'',
            retypePassword:''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = async (values) => {
        const {onSubmit} =props;
        if(onSubmit){
            await  onSubmit(values)
        }
        form.reset()
    }
    const {isSubmitting} =form.formState
    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress}/>}
            <Avatar className={classes.avarta} >
                <LockOutlinedIcon></LockOutlinedIcon>
            </Avatar>
            <Typography component="h5"variant="h5" className={classes.title} >
                Create An account
            </Typography>

            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name='fullName' label='Full Name'  form={form}/>
                <InputField name='email' label='Email'  form={form}/>
                <PasswordField name='password' label='Password'  form={form}/>
                <PasswordField name='retypePassword' label='Retype Password'  form={form}/>
                <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
                    Create account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;