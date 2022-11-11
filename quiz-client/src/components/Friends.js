// import React from 'react';
// import { Button, styles, Avatar, MenuItem, Menu, IconButton, AppBar, Toolbar, CardContent, Card, Box, TextField, Typography, Grid, FormControlLabel, Paper } from '@mui/material';
// import { makeStyles } from 'tss-react/mui';
// import React, { useEffect, useState } from "react";

// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//     },
//     title: {
//         flexGrow: 1,
//     },
//     large: {
//         width: theme.spacing(20),
//         height: theme.spacing(20),
//     },
// }));

// export default function Profile() {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const user = JSON.parse(localStorage.getItem('user'));

//     const handleMenu = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//     let navigate = useNavigate();
//     const routeChange = () => {
//         let path = `/UserListing`;
//         navigate(path);
//     }

//     const handleLogout = () => {
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("user");
//         window.location.href = "/prfole";
//     };
//     const Removefunction = (id) => {
//         if (window.confirm("Do you really want to delete?")) {
//             // delete endpoint one method
//             fetch("https://localhost:7096/api/User/" + id, {
//                 method: "DELETE"
//             }).then((res) => {
//                 alert('Deleted successfully.')
//                 window.location.reload();
//             }).catch((err) => {
//                 console.log(err.message)
//             })
//         }
//     }

//     const LoadEdit = (id) => {
//         navigate('/user/edit/' + id);
//     }
//     // get all endpoint method
//     useEffect(() => {
//         fetch("https://localhost:7096/api/User").then((res) => {
//             return res.json();
//         }).then((resp) => {
//             contdatachange(resp);
//         }).catch((err) => {
//             console.log(err.message);
//         })
//     }, [])

//     return (
//         <div className={classes.root}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <Typography variant="h6" className={classes.title}>
//                         Friends
//                     </Typography>
//                     <div>
//                         <IconButton onClick={handleMenu} color="inherit">
//                             <Avatar src={user.avatar} />
//                         </IconButton>
//                         <Menu id="menu-appbar"
//                             anchorEl={anchorEl}
//                             open={open}
//                             onClose={handleClose}
//                         >
//                             <MenuItem onClick={handleLogout}>Logout</MenuItem>
//                         </Menu>
//                     </div>
//                 </Toolbar>
//             </AppBar>
//             <Card className={classes.root} variant="outlined">
//                 <table>
//                     <thead >
//                         <tr>
//                             <td>Name</td>
//                             <td>Email</td>
//                             <td>Phone</td>
//                             <td>Address</td>
//                             <td>Action</td>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {contdata &&
//                             contdata.map(item => (
//                                 <tr key={item.id}>
//                                     <td>{item.fullName}</td>
//                                     <td>{item.email}</td>
//                                     <td>{item.phone}</td>
//                                     <td>{item.address}</td>
//                                     <td><a style={{ color: "blue" }} onClick={() => { LoadEdit(item.id) }}>Edit  </a>/
//                                         <a style={{ color: "red" }} onClick={() => { Removefunction(item.id) }}>  Delete</a>
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </Card>
//             <Card>
//                 <Button color="primary" className="px-4"
//                     onClick={routeChange}
//                 >
//                     Friends
//                 </Button>
//                 <Button color="primary" className="px-4"
//                     onClick={routeChange}
//                 >
//                     Groups
//                 </Button>
//                 <Button color="primary" className="px-4"
//                     onClick={routeChange}
//                 >
//                     Pages
//                 </Button>
//             </Card>
//             <Card>
//                 <CardContent>
//                     <div className="card__title">Heading for Article</div>
//                     <Typography variant="h5">
//                         <div className="card__image">
//                             <img src="https://picsum.photos/300/200?random=10" />
//                         </div>
//                         <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deleniti eius error, excepturi expedita, facilis id ipsa iste iusto modi numquam placeat porro provident quasi qui sunt tenetur velit voluptas?</p>
//                     </Typography>
//                     <Card>
//                         <Button color="primary" className="px-4"
//                             onClick={routeChange}
//                         >
//                             Comments
//                         </Button>
//                         <Button color="primary" className="px-4"
//                             onClick={routeChange}
//                         >
//                             Share
//                         </Button>
//                         <Button color="primary" className="px-4"
//                             onClick={routeChange}
//                         >
//                             Likes
//                         </Button>
//                     </Card>
//                 </CardContent>
//             </Card>
//             <Card>
//                 <CardContent>
//                     <div className="card__title">Heading for Article</div>
//                     <Typography variant="h5">
//                         <div className="card__image">
//                             <img src="https://picsum.photos/300/200?random=10" />
//                         </div>
//                         <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deleniti eius error, excepturi expedita, facilis id ipsa iste iusto modi numquam placeat porro provident quasi qui sunt tenetur velit voluptas?</p>
//                     </Typography>
//                     <Card>
//                         <Button color="primary" className="px-4"
//                             onClick={routeChange}
//                         >
//                             Comments
//                         </Button>
//                         <Button color="primary" className="px-4"
//                             onClick={routeChange}
//                         >
//                             Share
//                         </Button>
//                         <Button color="primary" className="px-4"
//                             onClick={routeChange}
//                         >
//                             Likes
//                         </Button>
//                     </Card>

//                 </CardContent>
//             </Card>
//         </div>
//     );
// }

