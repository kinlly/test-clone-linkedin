import React, {useState,useEffect} from 'react'

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


function Feed() {
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot=> (
            setPosts(
                snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),  
            }    
            )))
        ))
    },[]);

    const sendPost = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            name: 'cris',
            description: 'this is a test',
            message: input,
            photoUrl : '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
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

            { posts.map( ( {id, data: {name, description, message, photoUrl } } ) => ( 
            <Post 
                key={id}
                name={name}
                description={description}
                message= {message}
                photoUrl = {photoUrl}
            /> 
            ) ) }

        </div>
    )
}

export default Feed
