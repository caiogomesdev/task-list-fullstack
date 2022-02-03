import {Bar, 
    NonSelect, 
    BarBody
} from "./style"

import {useState, useEffect, useRef} from "react"
const App = ({name, description})=>
{
    const TaskBar = useRef(null);
    const TaskBarBody = useRef(null);

    const [move,setMove] = useState(false)
    const [moved, setMoved] = useState(false)

    const [initialOffSet, setInitialOffset] = useState({x:0,y:0})

    const PaddingWidth = 20
    const PaddingHeight = 10

    useEffect(()=>{
    },[moved])

    function OnMouseDown(item){
        setMove(true);
        setMoved(false);

        let height = `${TaskBar.current.offsetHeight - PaddingHeight}px`; //Valor - o padding
        let width = `${TaskBar.current.offsetWidth - PaddingWidth}px`; //Valor - o padding

        TaskBarBody.current.style.height = height;
        TaskBarBody.current.style.width = width;

        TaskBarBody.current.style.zindex = "2"
        setInitialOffset({x: item.clientX - TaskBarBody.current.offsetLeft, y:item.clientY - TaskBarBody.current.offsetTop})
    }
    function OnMouseUp(item){
        if(!move) return; //Para não validar eventos que não tenham OnMouseDown
        TaskBar.current.style.border = "none"
        setMove(false);
        setMoved(false);
        if(!moved) Click(item);

        TaskBarBody.current.style.zindex = "1"
        TaskBarBody.current.style.position = TaskBar.current.style.height 
        = TaskBarBody.current.style.backgroundColor = TaskBarBody.current.style.padding = ""
    }

    function OnMouseMove(item){
        if(!move) return;
        
        setMoved(true);
        TaskBar.current.style.height = `${TaskBarBody.current.offsetHeight + PaddingHeight}px`;
        TaskBar.current.style.border = "dashed 2px rgba(0,0,0,0.4)"

        TaskBarBody.current.style.position = "absolute";
        TaskBarBody.current.style.backgroundColor = "rgba(242,242,242,.5)"
        TaskBarBody.current.style.borderRadius = "5px"
        TaskBarBody.current.style.top = `${(item.clientY - initialOffSet.y)}px`
        TaskBarBody.current.style.left = `${item.clientX - initialOffSet.x}px`
    }
    function Click(item){
        
    }
    return(
        <Bar id="TaskBar" Moved={moved} 
        ref={TaskBar} 
        onMouseLeave={(item)=>OnMouseUp(item)} 
        onMouseDown={(item)=> OnMouseDown(item)} 
        onMouseUp={(item)=> OnMouseUp(item)} 
        onMouseMove={(item)=>OnMouseMove(item)}
        >
            <BarBody ref={TaskBarBody}>
                <NonSelect>
                    <h3>{name}</h3>
                    <p>
                    {description}
                    </p>
                </NonSelect>
            </BarBody>
        </Bar>
    );
};

export default App;