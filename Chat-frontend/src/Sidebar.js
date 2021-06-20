import React from "react";
import "./Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar,IconButton } from "@material-ui/core";import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
            <Avatar src="https://avatars.githubusercontent.com/u/81804004?v=4" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>

                </div>
            </div>
            <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchIcon/>
                <input placeholder="Search or start new chat" type="text" />
            </div>
            </div>
            <div className="sidebar__chats" >
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    );
}

export default Sidebar;
