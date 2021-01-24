import  Header from "./component/header";
import "./app.scss";
import Headline from "./component/headline";

const tempArr=[{
  firstName:'john',
  lastName:'Doe',
  age:24,
}]

function App() {
  return (
    <div className="App">
     <Header/>
     <Headline header="posts" desc='click on button to see post' tempArr={tempArr}/>
    </div>
  );
}

export default App;
