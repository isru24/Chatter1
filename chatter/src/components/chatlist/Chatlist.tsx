import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ChatListItem from "./Chatlist-item";
import ChatListHeader from "./Chatlist-header";
import { Stack } from "@mui/system";
import { useState } from "react";
import ChatListAdd from "./Chatlist-Add";

const Chatlist = () => {
  const [chatListAddVisible,setChatListAddVisible] = useState(false)
  return (
    <>
    <ChatListAdd open={chatListAddVisible} handleClose={()=>setChatListAddVisible(false)}/>
    <Stack>
      <ChatListHeader handleAddChat={() => setChatListAddVisible(true)}/>
      <Divider/>
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" ,maxHeight:"80vh",overflow:"auto"}}>
      <ChatListItem />
    </List>
    </Stack>
    </>
  );  
};

export default Chatlist;
