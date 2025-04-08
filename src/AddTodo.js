import React, { useState } from 'react';
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) =>{
    const [inputItem, setItem] = useState({title: ""});
    const addItem = props.addItem; // props로 addItem 가져옴

    const onButtonClick = () => {
        addItem(inputItem);
        setItem({title: ""});
    }

    //onInputChange
    const onInputChange = (e) => {
        setItem({title: e.target.value});//입력된 값을 저장
        console.log(inputItem);
    };

    return(
        <Grid container style={{marginTop:20}}>
            <Grid xs={11} md={11} item style={{paddingRight:16}}>
                <TextField placeholder='Add Todo here' fullWidth onChange={onInputChange} value={inputItem.title}/>
                {/**value부분이 없으면 state만 변경되고 TextField 컴포넌트의 value 값은 변경되지 않음 */}
            </Grid>
            <Grid xs={1} md={1} item>
                <Button fullWidth style={{height:'100%'}} color="secondary" variant="outlined" onClick={onButtonClick}>
                    +
                </Button>
            </Grid>
        </Grid>
    );
}

export default AddTodo;