import { useEffect, useState } from "react";
import { getTodo, putTodo, removeTodo } from "../../api/TodoAPI";

const initState = {
    tno : 0 ,
    title : ''
}

const Todo2Read = ({target , changeView}) => {

    const [todo , setTodo] = useState(initState)

    const [refresh, setRefresh] = useState(false)

    // target이 변경되면 useEffect
    useEffect(()=>{

        //getTodo 해서 가져온 data 값을 setTodo를 하겠다!
        getTodo(target).then(data => {
            setTodo(data)
        })
        // target을 의존
    },[target,refresh])

    // DEL 클릭 했을 떄
    const handleClickDel = async() => {
        // {result}는 구조분해할당 한것.
        const {result} = await removeTodo(target)

        if(result === 'success'){
            alert("삭제되었습니다.")
        }
        changeView("list")

    }

    // Mod 클릭 했을 떄
    const handleClickMod = async() => {
        // {result}는 구조분해할당 한것.
        const {result} = await putTodo(todo)
    
        if(result === 'success'){
            alert("수정되었습니다.")
        }
        setRefresh(!refresh)
    
    }



    return ( 
        <div>
            <div>Todo Read</div>
            <div>{target}</div>
            <div>{todo.tno}</div>
            <div>{todo.title}</div>
            <div>
                <input type="text" value={todo.title} onChange={e => {
                    todo.title = e.target.value
                    setTodo({...todo})
                }}></input>
            </div>
            <div className="flex p-4 justify-center">
                <div className="m-2 p-2 border-2 bg-blue-500"
                onClick={handleClickMod}
                >MOD</div>
                <div className="m-2 p-2 border-2 bg-red-500"
                onClick={handleClickDel}>DEL</div>
            </div>
        </div>
     );
}
 
export default Todo2Read;