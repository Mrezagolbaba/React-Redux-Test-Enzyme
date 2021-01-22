import  Header from "./component/header";
import "./app.scss";
import Headline from "./component/headline";
function App() {
  return (
    <div className="App">
     <Header/>
     <Headline header="posts" desc='click on button to see post'/>
    </div>
  );
}

export default App;
