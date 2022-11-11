import {Button, CardContent, Card, Box, TextField, Typography, Grid, FormControlLabel, Paper} from '@mui/material';
import React, { useState } from 'react';
import Center from './Center';
import useForm from '../hooks/useForm';
import {createdAPIEndpoint, ENDPOINT} from "../api";
const getFreshModel = () => ({
    name: '',
    email:''
})
export default function Login() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const [values, setValues] = useState(getFreshModel());
    const [States, setState] = useState({});
    const [errors, setErrors] = useState({});
    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const validate = ()=> {
        let temp ={}
        temp.email = (/\S+@\S+\.\S+/).test(values.email)?"":"Email is not valid"
        temp.name = values.name !== "" ? "":"This Field is required"
        setErrors(temp)
        return Object.values(temp).every(x =>x==="");
    }

    const login = e => {
        e.preventDefault();
        if(validate())
            fetch('https://localhost:7151/api/Admin',{
                method: 'POST',
                headers:{'Content-type':'application/json'},
                body: values
            }).then(r=>r.json()).then(res=>{
                if(res){
                    setState({message:'Registered Successfully'});
                }
            });
        console.log(values);
    }
    

    return (
        <div style={{ padding: 30 }}>
            <Paper>
                <CardContent sx={{textAlign:"center"}}>
                    <Typography variant="h3" sx={{my:3}}>Festivity App</Typography>
                    <Box sx={{
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
               
            </Paper>
        </div>
    );
};

