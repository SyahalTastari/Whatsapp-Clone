import React, {useEffect, useState} from 'react'
import {Avatar, IconButton} from '@material-ui/core';
import {AttachFile, MoreVert, SearchOutlined, InsertEmoticon, Mic} from '@material-ui/icons';
import { useParams } from 'react-router-dom'
import "./Chat.css"
import db from './firebase';

function Chat() {
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');


    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            }) 
        }
    })

    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()

        setInput("");
    }
  return (
    <div className='chat'>
        <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{roomName}</h3>
                <p>Last seen at ...</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined></SearchOutlined>
                </IconButton>
                <IconButton>
                    <AttachFile></AttachFile>
                </IconButton>
                <IconButton>
                    <MoreVert></MoreVert>
                </IconButton>
            </div>
        </div>
        <div className="chat__body">
            <p className={`chat__message ${true && `chat__receiver`}`}>
                <span className='chat__name'>Syahal Tasatari</span>
                Heey Guys
                <span className='chat__timestamp'>3:52 pm</span>
            </p>
            <p className={`chat__message ${false && `chat__receiver`}`}>
                <span className='chat__name'>Syahal Tasatari</span>
                Heey Guys
                <span className='chat__timestamp'>3:52 pm</span>
            </p>
        </div>

        <div className="chat__footer">
            <InsertEmoticon/>
            <form action="">
                <input 
                value={input} 
                onChange={e => setInput(e.target.value)} 
                type="text"
                placeholder='Type a message'
                />
                <button onClick={sendMessage} type="submit">Send a message</button>
            </form>
            <Mic/>
        </div>
    </div>
  )
}

export default Chat