import React, { useState } from 'react';
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) =>{
    const [inputItem, setItem] = useState({title: ""});

    //onInputChange
    const onInputChange = (e) => {
        setItem({title: e.target.value});//입력된 값을 저장
        console.log(inputItem);
    };

    return(
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} md={11} item style={{paddingRight:16}}>
                <TextField placeholder='Add Todo here' fullWidth onChange={onInputChange} value={inputItem.title}/>
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{height:'100%'}} color="secondary" variant="outlined">
                    +
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;