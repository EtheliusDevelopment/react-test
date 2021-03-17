import React, { Component, Fragment } from 'react';
import { AppBar, TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
// import { AppBar } from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function Componente (props) {
    const {
        email, 
        password,
        onChangeCampo,
        onLogin,
    } = props;

    return (
        <Fragment>
            <AppBar  position = 'static'>
                <Toolbar>
                    <Typography
                        variant = 'h6'
                        color = 'inherit'
                        >
                            Benvenuto

                    </Typography>
                </Toolbar>
            </AppBar>
            <div style ={{padding : '2rem'}}>
            <TextField 
            label = 'Email'
            fullWidth
            value = {email}
            onChange = {e => onChangeCampo ('email', e.target.value)}
            />

            <TextField 
            label = 'Password'
            fullWidth
            value = {password}
            onChange = {e => onChangeCampo ('password', e.target.value)}


            />
            <br/>
            <br/>

            <Button
                variant = 'contained'
                color = 'primary'
                fullWidth
                onClick = {onLogin}
                >
                    Login

            </Button>
            </div>

        </Fragment>
    )
};

export default Componente;
