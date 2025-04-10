import React, { useState } from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const Todo = (props) => {
    const[item, setItem] = useState(props.item);/*상태변경 함수 생성. 부모가 넘겨준 item 객체를 item 상태 변수가 가리킴 */
    const deleteItem = props.deleteItem; //1. deleteItem 연결

    //2. 이벤트 핸들러 생성
    const deleteEventHandler =() => {
        deleteItem(item);
    }

    return (
        <ListItem>
            <Checkbox checked={item.done}/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label": "naked"}}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete Todo" onClick={deleteEventHandler}> {/**3. 이벤트 핸들러 연결 */}
                    <DeleteOutlined/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>

        
        //     <div className='Todo'>
        //     {/*리터럴 타입*/
        //     /*<input type='checkbox' id='todo0' name='todo0' value='todo0'/>*/}
        //     <input
        //         type='checkbox'
        //         id={item.id}
        //         name={item.id}
        //         checked={item.done}
        //         />
        //     <label for={item.id}>{item.title} {props.id}
        //     </label>
        // </div>
        
    );

};

export default Todo;
