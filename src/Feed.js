import React, { useState, useEffect } from 'react'

import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Photo'
import DuoIcon from '@material-ui/icons/Duo';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EventIcon from '@material-ui/icons/Event';
import './Feed.css'
import './InputOption.css'
import InputOption from './InputOption'
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move'

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }
                    )))
            ))
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Event: Form Submit');
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    };
    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                        <button type="submit" onClick={sendPost} >Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOption Icon={DuoIcon} title="Video" color="#7fc15e" />
                    <InputOption Icon={EventIcon} title="Event" color="#e7a33e" />
                    <InputOption Icon={AssignmentIcon} title="Write Article" color="#f5987e" />
                </div>
            </div>
            <FlipMove>
                {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
