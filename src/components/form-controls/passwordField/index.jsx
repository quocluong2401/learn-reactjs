import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';

PasswordField.propTypes = {
    form : PropTypes.object.isRequired,
    name : PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool,
};

function PasswordField(props) {
    const {form ,name, label, disable} =props;
    const {errors} =form;
    const hasError = errors[name];
    
    const [showPassword,setShowPassword]= useState(false)
    const toggleShowPassword = () =>{
        setShowPassword(!showPassword)
    }
    return (
        <div>
        
        <FormControl             
          error={hasError} fullWidth margin="normal" variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <Controller
            name ={name}
            control={form.control}
            as={OutlinedInput}
          id={name}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={toggleShowPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
          disable={disable}
        />
      <FormHelperText error={!!hasError}>{errors[name]?.message}</FormHelperText>

      </FormControl>
        </div>
        
    );
}

export default PasswordField;
