import {
    Content, 
    TaskContent, 
    TaskRow, 
    TaskCollumn, 
    TaskHeader,
    TaskBody
} from "./style"


import TaskBar from "../../components/TaskBar"

import { useState } from "react";


const Home = ()=>{

    return(
        <Content>
            <TaskContent>
                <TaskRow>
                    <TaskCollumn>
                        <TaskHeader>To do</TaskHeader>
                        <TaskBody>
                            <TaskBar id={1} name="cortar cabelo" description="Procurar a barbearia para cortar o cabelo e ficar bonito..."/>
                        </TaskBody>
                    </TaskCollumn>

                    <TaskCollumn>
                        <TaskHeader>Doing</TaskHeader>
                        <TaskBody>
                            <TaskBar id={2} name="cortar" description="barbearia para cortar o cabelo e ficar bonito..."/>
                            <TaskBar id={3} name="Pagar luz" description="Ir na lotérica pagar a conta de luz..."/>

                        </TaskBody>

                    </TaskCollumn>

                    <TaskCollumn>
                        <TaskHeader>Done</TaskHeader>
                        <TaskBody>
                            No tasks found.
                        </TaskBody>
                    </TaskCollumn>

                </TaskRow>
            </TaskContent>            
        </Content>
    )
}

export default Home;