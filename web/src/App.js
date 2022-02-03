
import GlobalStyle from "./styles/global"
import Routes from "./routes"

import TaskProvider from "./contexs"
function App() {
  return (
    <TaskProvider>
      <Routes />
      <GlobalStyle />
    </TaskProvider>
  );
}

export default App;
