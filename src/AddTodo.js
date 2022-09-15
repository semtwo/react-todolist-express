import { Input, Paper, Grid, Button, TextField } from "@mui/material";
import { useState } from "react";

class ItemObject {
    constructor(id, title, done){
        this.id =id;
        this.title = title;
        this.done = done;
    }
}

function AddTodo({onAddItem, idx}){
    const [item, setItem] =useState(new ItemObject("", "", false));
    const onButtonClick = e =>{
        onAddItem(item);
        setItem(new ItemObject(idx++, "", false));
    }
    const onEnterPress = e =>{
        if(e.key === "Enter"){
            onButtonClick(e);
            setItem(new ItemObject(idx++, "", false));
        }
    }

    return(
        <Paper style = {{margin : '16px 0px', padding:'16px'}}>
            <Grid container>
                <Grid xs ={11} item md ={11} style={{paddingRight:"16px"}}>
                    <TextField fullWidth placeholder ="할 일을 입력하세요..."
                      value ={item.title}
                      onChange ={e=>{
                        let currItem = {...item};
                        currItem.title = e.currentTarget.value;
                        setItem(currItem);
                      }}
                      onKeyPress ={onEnterPress} />
                </Grid>
                <Grid xs ={1} item md = {1}>
                    <Button onClick = { e => {onButtonClick()}}>추가</Button>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default AddTodo;