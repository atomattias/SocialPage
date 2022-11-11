import React from 'react';
import {Button, styles, Avatar, MenuItem, Menu, IconButton, AppBar, Toolbar, CardContent, Card, Box, TextField, Typography, Grid, FormControlLabel, Paper} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import EditUser from './EditUser';
import UserListing from './UserListing';
import CreateUser from './CreateUser';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}));

export default function Profile() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const user = JSON.parse(localStorage.getItem('user'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/UserListing`;
        navigate(path);
    }

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        window.location.href = "/prfole";
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Profile
                    </Typography>
                    <div>
                        <IconButton onClick={handleMenu} color="inherit">
                            <Avatar src={user.avatar} />
                        </IconButton>
                        <Menu id="menu-appbar"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Avatar src={user.avatar} className={classes.large} />
                    <Typography variant="h5">
                        Welcome {user.fname} {user.lname}
                    </Typography>
                    
                </CardContent>
            </Card>
            <Card>
                <Button color="primary" className="px-4"
                    onClick={routeChange}
                >
                    Friends
                </Button>
                <Button color="primary" className="px-4"
                    onClick={routeChange}
                >
                    Groups
                </Button>
                <Button color="primary" className="px-4"
                    onClick={routeChange}
                >
                    Pages
                </Button>
            </Card>
            <Card>
                <CardContent>
                    <Avatar src={user.avatar} className={classes.large} />
                    <Typography variant="h5">
                        Bilal {user.fname} {user.lname}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}