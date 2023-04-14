import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core/";
import { useDispatch } from "react-redux";

import { getPosts } from './actions/posts';

import memories from '../src/images/memories.png'
import Posts from './Components/Posts/Posts'
import Form from './Components/Form/Form'
import useStyles from './styles';



const App = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);



    //Use effect initially will be component did mount later it will be component did update

    //it will run only the changes happened in mentioned field
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId]);
    return (

        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} currentId={currentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App