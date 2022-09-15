import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Checkbox, IconButton, ListItem, ListItemText, InputBase, ListItemSecondaryAction } from "@mui/material";
import { useState } from "react"
import DeleteOutline from '@mui/icons-material/DeleteOutline'

function Todo({item, deleteItem, updateItem}){
    const [readOnly, setReadOnly] = useState(true);
    const [titleData, setTitleData] =useState(item.title);

    const deleteItemHandler = (e) =>{
        deleteItem(item);
    
    }
    //togglecheckbox

    const onUpdateItem = (cmd) =>{
        setReadOnly(true);
        const currItem ={...item};
        currItem.title = titleData;
        if(cmd ==='toggleChk') currItem.done = !currItem.done; // a =+a; 같은 방식
        updateItem(currItem);
    }
    return(
        <ListItem>
            <Checkbox onClick={ e =>{
                onUpdateItem('toggleChk');}}
                checked = {item.done} icon ={<FavoriteBorder/>} checkedIcon ={<Favorite/>} />
            <ListItemText>
                <InputBase
                    type="text"
                    inputProps = {{"aria-label":"naked", readOnly : readOnly}}
                    id ={item.it}
                    name = {item.id}
                    multiline = {true}
                    fullWidth = {true}
                    onChange = {e => {setTitleData(e.target.value)}}
                    onClick ={e => {setReadOnly(false)}}
                    onKeyPress = {e => {if(e.key ==='Enter') onUpdateItem();}}
                    value={titleData}
                >
                </InputBase>
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label ="Delete Todo" onClick = {deleteItemHandler}>
                    <DeleteOutline />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Todo;
