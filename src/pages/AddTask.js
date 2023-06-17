import { useState, useEffect } from "react"

const AddTask = () => {

    const [ inputText, setInputText ] = useState(``);
    const [ taskList, setTaskList ] = useState([]);

    const inputOnChange = (event) => {
        setInputText(event.target.value)
        console.log(inputText)
    }

    const handleAddTask = ()=>{
        setTaskList((prevState) => ([...prevState, inputText]));
        setInputText(``)
        console.log(taskList)
    }

    const taskListMap = taskList.map((task, index) => {
        return(
            <li key={index}>task</li>
        )
    })

    return(
        <>
            <input type="text" value={inputText}  onChange={ inputOnChange }/>
            <button onClick={handleAddTask}> AddTask</button>
            <ul>
              {taskListMap}
            </ul>
            
        </>
    )
       
}
export default AddTask