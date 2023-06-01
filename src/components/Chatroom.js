import ChatHistory from "./childcomponents/ChatHistory";
import SendMessage from "./childcomponents/SendMessage";
import { useState } from "react";

const Chatroom = ({chatroom, messageHistory, message, postMessage, user, chatroomUserList, postNewChatroomName, notificationMessage}) => {

    const [currentlyEditing, setCurrentlyEditing] = useState(false);
    const [stateChatroomName, setStateChatroomName] = useState("");
   
    // const userList = chatroom.users;
    const list = chatroomUserList ? chatroomUserList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>) : null;
    // const list = chatroom ? userList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>) : null;
    
    const changeCurrentlyEditingBoolean = () => {
        // change currentlyEditing variable --> true
        setCurrentlyEditing(true);
    }

    const handleEditChatroomName = (e) => {
        e.preventDefault();
        // change the chatroom name
        postNewChatroomName(stateChatroomName, chatroom.id);
        // change currentlyEditing variable --> false
        setCurrentlyEditing(false);
    }

    const handleChange = (e) => {
        // let name = e.target.name;
        // let copiedChatroomName = {stateChatroomName};
        setStateChatroomName(e.target.value);
    }

    // EXTENSION: sort every single on of the chatrooms message list, whatever one's the newest, sort it based on that
    // ALTERNATIVE: refresh chatroom list component every 5 seconds

    return ( 
        <>
            <div className="chatroom_title">
                <div>
                    {currentlyEditing ?
                    // <div style={{height: "50%"}} className="add-new-chatroom"> <form onSubmit={handleEditChatroomName}>
                    //     <input type="text" name="chatroomName" placeholder="new chatroom name" value={stateChatroomName} onChange={handleChange}/> 
                    //     <button style={{fontSize: "1.5em"}} type="submit">&#x2713;</button></form></div> 
                    <form style={{height: "50%", padding: "9px 5px"}} className="add-new-chatroom" onSubmit={handleEditChatroomName}>
                    <input type="text" name="chatroomName" placeholder="new chatroom name" value={stateChatroomName} onChange={handleChange}/> 
                    <button style={{fontSize: "1.5em"}} type="submit">&#x2713;</button></form>
                    
                    :   <div style={{height: "50%", border: "none"}} className="add-new-chatroom"> 
                            <h2>{chatroom.name}</h2>  
                            <button style={{fontSize: "1.5em"}} type="button" onClick={changeCurrentlyEditingBoolean}>&#9998;</button> 
                        </div>}
                </div>
                <div className="display_of_users">{list}</div>
                {/* {chatroom ? userList.map((chatroomUser, index) => <p key={index}>{chatroomUser.name}</p>) : null} */}
            </div>
            <div className="chatroom_container">
                <ChatHistory messageHistory={messageHistory} notificationMessage={notificationMessage}/>
            </div>
            <div className="send_message">
                <SendMessage chatroom={chatroom} message={message} postMessage={postMessage} user={user}/>
            </div>
        </>
        
     );
}
 
export default Chatroom;