import react from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

// import { set } from 'mongoose';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">
                    {post.title}
                </Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2}>
                <Button onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} size="small">
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>

            <Typography variant="h7"
                className={classes.title
                } gutterBottom>
                {post.creator}:
            </Typography>

            <CardContent>
                <Typography variant="h5" gutterBottom >
                    {post.message}
                </Typography>
            </CardContent>



            <CardActions className={classes.cardActions}>

                <Button size="small" color="primary" onClick={() => { dispatch(likePost(post._id)) }}>
                    <ThumbUpAltIcon fontSize="small" />
                    Likes {post.likeCount}
                </Button>


                {/* Dispatching action for deleting the post */}
                <Button size="small" color="primary" onClick={() => { dispatch(deletePost(post._id)) }}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>

            </CardActions>
        </Card>
    )
}

export default Post
