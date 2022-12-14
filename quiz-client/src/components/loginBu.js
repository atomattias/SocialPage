import {Button, CardContent, Card, Box, TextField, Typography, Grid} from '@mui/material';
import React, { useState } from 'react';
import Center from './Center';
import useForm from '../hooks/useForm';
const getFreshModel = () => ({
    name: '',
    email:''
})
export default function Login() {
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);
    const login = e => {
        e.preventDefault();
        console.log(values);
    }
    return (
        <Center>
            <Card sx={{ width: 400, }}>
                <CardContent sx={{textAlign:"center"}}>
                    <Typography variant="h3" sx={{my:3}}>Festivity App</Typography>
                    <Box component="form" sx={{
                        '& .MuiTextField-root': { m: 1, width: '90%' },
                    }}>

                        <Grid item xs={12}>
                            
                        <form noValidate autoComplete="off" onSubmit={login}>
                            <TextField
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                variant="outlined" />
                            <TextField
                                label="Name"
                                name="name"
                                value={values.name}
                                onChange={ handleInputChange}
                                variant="outlined" />
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                sx={{ width: "90%", }}>Start</Button>

                        </form>
                        </Grid>

                    </Box>
                </CardContent >
            </Card>
        </Center>
    )
}
