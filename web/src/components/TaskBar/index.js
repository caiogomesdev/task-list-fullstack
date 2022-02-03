import {Bar, NonSelect, BarBody} from "./style"
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
    },[move])

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
    function OnMouseMove(item){
        if(!move) return;
        
        setMoved(true);

        TaskBarBody.current.style.position = "absolute"

        TaskBarBody.current.style.top = `${(item.clientY - initialOffSet.y)}px`
        TaskBarBody.current.style.left = `${item.clientX - initialOffSet.x}px`
    }
    function OnMouseUp(item){
        if(!move) return; //Para não validar eventos que não tenham OnMouseDown
        console.log("UP")
        setMove(false);
        setMoved(false);
        if(!moved) Click(item);

        TaskBarBody.current.style.zindex = "1"
        TaskBarBody.current.style.position = ""
    }

    function OnMouseMove(item){
        if(!move) return;
        
        setMoved(true);

        TaskBarBody.current.style.position = "absolute"

        TaskBarBody.current.style.top = `${(item.clientY - initialOffSet.y)}px`
        TaskBarBody.current.style.left = `${item.clientX - initialOffSet.x}px`
    }
    function Click(item){
        //Quando clicar

    }
    return(
        <Bar id="TaskBar" Moved={move && moved} ref={TaskBar} onMouseLeave={(item)=>OnMouseUp(item)} onMouseDown={(item)=> OnMouseDown(item)} onMouseUp={(item)=> OnMouseUp(item)} onMouseMove={(item)=>OnMouseMove(item)}>
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