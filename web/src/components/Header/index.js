import {Header} from "./style.js"
import {Link} from "react-router-dom"
const App = ()=>{
    return (
        <Header>
        <div className="logo"><h1><Link to="/">TaskList</Link></h1></div>

        <nav>
            <ul><Link to="/add">Add</Link></ul>
            
        </nav>

        </Header>
    )
}

export default App;