import react, { useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import Post from './Post/Post';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';

const Posts = ({ currentId, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    //Getting all the data from redux container 
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [])

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid container className={classes.container} alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => ((
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </Grid>
                    )))
                }
            </Grid>
        )
    )
}

export default Posts