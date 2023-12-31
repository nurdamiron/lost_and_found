import { useState, useEffect } from "react";
import ChatList from "./ChatList";
import ChatWindow from "./ChatWindow";

const ChatIndex = () => {
    const [chat, setChat] = useState({userName: "", chatId: "", load: true, messages: [], lastTime: ""});
    console.log("Chat Idx");

    useEffect(() => {
        document.title = "Chat - LoFo"
    }, []);
    
    const screenHandler = () => {
        let width = window.innerWidth;
        const chatList = document.getElementById("chatList");
        const chatWindow = document.getElementById("chatWindow");

        if(width < 768) {
            if(chatList.classList.contains("w-full")) {
                chatList.classList.remove("w-full");
                chatList.classList.add("w-0");
                chatWindow.classList.remove("hidden");
            }
            else {
                chatList.classList.add("w-full");
                chatList.classList.remove("w-0");
                chatWindow.classList.add("hidden");
            }
        }
    }

    return (
        <div className = "w-full flex mt-3" style = {{ "height": "calc(100vh - 300px)" }}>
            <ChatList setChat = { setChat } currChat = { chat.chatId } screenHandler = { screenHandler }></ChatList>
            <ChatWindow setChat = { setChat } chat = { chat } screenHandler = { screenHandler } />
        </div>
    );
}

export default ChatIndex;