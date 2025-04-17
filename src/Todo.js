import React, { useState } from "react";
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";

const Todo = (props) => {
    const[item, setItem] = useState(props.item);/*상태변경 함수 생성. 부모가 넘겨준 item 객체를 item 상태 변수가 가리킴 */
    const deleteItem = props.deleteItem; //1. deleteItem 연결
    const [readOnly, setReadOnly] = useState(true);
    const editItem = props.editItem;

    //2. 이벤트 핸들러 생성
    const deleteEventHandler =() => {
        deleteItem(item);
    }
    //title 클릭 시 실행. 현재는 false -> readonly 상태에서 풀림
    const turnOffReadOnly =() =>{
        setReadOnly(false);
    }

    //enter 키를 누르면 다시 readonly 상태로 변경
    const turnOnReadOnly = (e) => {
        if(e.key === "Enter" && readOnly === false){
            setReadOnly(true);
            editItem(item);
        }
    }

    const editEventHandler = (e) => {
        //item.title = e.target.value;
        setItem({...item, title: e.target.value});
    }

    //체크박스 변경 시 작동
    const checkboxEventHandler = (e) =>{
        item.done = e.target.checked;
        editItem(item);
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEventHandler}/> {/**체크박스 변경 시 작동 */}
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label": "naked", readOnly:readOnly}}
                    onClick={turnOffReadOnly}
                    onKeyDown={turnOnReadOnly}
                    onChange={editEventHandler}
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
