import react, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';

///Have to get CurrentID here !!! for update purpose ....

const Form = ({ currentId, setCurrentId }) => {

    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: ''
    });

    // Getting only that post we wanted to update !
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])



    const handleSubmit = async (e) => {
        // setPostData
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));

        }
        else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {!currentId ? 'Creating' : 'Updating'} a Memory
                    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={[postData.creator]} onChange={(event) => setPostData({ ...postData, creator: event.target.value })} />

                    <TextField name="title" variant="outlined" label="Title" fullWidth value={[postData.title]} onChange={(event) => setPostData({ ...postData, title: event.target.value })} />

                    <TextField name="message" variant="outlined" label="Message" fullWidth value={[postData.message]} onChange={(event) => setPostData({ ...postData, message: event.target.value })} />

                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={[postData.tags]} onChange={(event) => setPostData({ ...postData, tags: event.target.value.split(',') })} />

                    <div className={classes.fileInput}>
                        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                    </div>

                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth
                    > Submit </Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth
                    > Clear </Button>
                </Typography>
            </form>
        </Paper>
    )
}

export default Form