import Header from "../../components/Header"
import {AddTaskContent, FormAddTask, BtnAdd} from "./style"

const Add = ()=>{

    return(
        <>
        
        <AddTaskContent>
            <FormAddTask>
                <label>Tarefa: </label>
                <input type="text" />
                <label>Descrição: </label>
                <textarea />
                <BtnAdd >+</BtnAdd>
            </FormAddTask>
        </AddTaskContent>

        </>
    )
}

export default Add;