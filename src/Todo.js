import React, { useState } from "react"

const Todo = (props) => {
    const[item, setItem] = useState(props.item);/*상태변경 함수 생성 */

    return (
        <div className='Todo'>
            {/*리터럴 타입*/
            /*<input type='checkbox' id='todo0' name='todo0' value='todo0'/>*/}
            <input
                type='checkbox'
                id={item.id}
                name={item.id}
                checked={item.done}
                />
            <label for={item.id}>{item.title} {props.id}
            </label>
        </div>
    );

};

export default Todo;
