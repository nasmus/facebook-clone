import React, { useEffect,useState } from 'react'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import { useStateValue } from "./StateProvider"
import db from "./firebase"
import firebase from "firebase";

function Feed() {
    const [{user}, dispatch] = useStateValue();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts')
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => (
            setPosts(
                snapshot.docs.map(doc => (
                    {   id:doc.id, 
                        data:doc.data() 
                    }
                ))
            )
        ))
    }, [])
    return (
        
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {posts.map(post => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    image={post.data.image}
                />
            ))}
        </div>
    )
}

export default Feed
