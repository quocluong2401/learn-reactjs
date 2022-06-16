import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/form-controls/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputField from 'components/form-controls/inputField';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {

    const schema = yup.object().shape({
        title: yup.string()
                .required('Please enter title')
                .min(5,'too short'),

    });

    const form = useForm({
        defaultValues:{
            title: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = (values) => {
        const {onSubmit} =props;
        if(onSubmit){
            onSubmit(values)
            form.reset()
        }
    }



    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <h3>To do Form</h3>
            <InputField name='title' label='Todo'  form={form}/>
        </form>
    );
}

export default TodoForm;