// import React from 'react';
// import { Button, styles, Avatar, MenuItem, Menu, IconButton, AppBar, Toolbar, CardContent, Card, Box, TextField, Typography, Grid, FormControlLabel, Paper } from '@mui/material';
// import { makeStyles } from 'tss-react/mui';
// import EditUser from './EditUser';
// import UserListing from './UserListing';
// import CreateUser from './CreateUser';
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
//                 <CardContent>
//                     <div class="content">

//                         <article class="card">
//                             <div class="card__image">
//                                 <img src="https://picsum.photos/300/200?random=1" />
//                             </div>
//                             <div class="card__body">
//                                 <div class="card__title">Heading for Article</div>
//                                 <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi delectus dolores illo libero necessitatibus nobis perferendis repellat reprehenderit tenetur vitae.</p>
//                                 <ul class="card__btn">
//                                     <button class="btn">Read</button>
//                                     <button class="btn">Share</button>
//                                 </ul>

//                             </div>
//                         </article>

//                         <article class="card">
//                             <div class="card__image">
//                                 <img src="https://picsum.photos/300/200?random=2" />
//                             </div>
//                             <div class="card__body">
//                                 <div class="card__title">Heading for Article</div>
//                                 <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deleniti eius error, excepturi expedita, facilis id ipsa iste iusto modi numquam placeat porro provident quasi qui sunt tenetur velit voluptas?</p>
//                                 <ul class="card__btn">
//                                     <button class="btn">Read</button>
//                                     <button class="btn">Share</button>
//                                 </ul>

//                             </div>
//                         </article>

//                         <article class="card">
//                             <div class="card__image">
//                                 <img src="https://picsum.photos/300/200?random=3" />
//                             </div>
//                             <div class="card__body">
//                                 <div class="card__title">Heading for Article</div>
//                                 <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deleniti eius error, excepturi expedita, facilis id ipsa iste iusto modi numquam placeat porro provident quasi qui sunt tenetur velit voluptas?</p>
//                                 <ul class="card__btn">
//                                     <button class="btn">Read</button>
//                                     <button class="btn">Share</button>
//                                 </ul>

//                             </div>
//                         </article>

//                         <article class="card">
//                             <div class="card__image">
//                                 <img src="https://picsum.photos/300/200?random=4" />
//                             </div>
//                             <div class="card__body">
//                                 <div class="card__title">Heading for Article</div>
//                                 <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, deleniti eius error, excepturi expedita, facilis id ipsa iste iusto modi numquam placeat porro provident quasi qui sunt tenetur velit voluptas?</p>
//                                 <ul class="card__btn">
//                                     <button class="btn">Read</button>
//                                     <button class="btn">Share</button>
//                                 </ul>

//                             </div>
//                         </article>
//                     </div>

//                 </CardContent>
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

