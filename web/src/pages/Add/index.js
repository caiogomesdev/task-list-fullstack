import Header from "../../components/Header"
import {AddTaskContent, FormAddTask, BtnAdd} from "./style"

import {useRef, useEffect, useState} from "react"

const Add = ()=>{

    const TarefaInput = useRef()

    const [tarefa, setTarefa] = useState("")
    const [descricao, setDescricao] = useState("")

    const TarefaFocus = useEffect(()=> 
    {
        TarefaInput.current.focus()
    },[])

    return(
        <>
        <AddTaskContent>
            <FormAddTask>
                <label>Tarefa: </label>
                <input type="text" placeholder="Ex: Cortar o cabelo" onInput={(input)=> setTarefa(input.target.value) } ref={TarefaInput}/>
                <label>Descrição: </label>
                <textarea placeholder="Ex: Ir na barbearia mais próxima" onInput={(input)=> setDescricao(input.target.value)}/>
                <BtnAdd >Add task</BtnAdd>
            </FormAddTask>
        </AddTaskContent>

        </>
    )
}

export default Add;