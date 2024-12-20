import Counter from "./Components/Counter";
// import Componentss from "./Components/MyComponents";
import Eventt from "./Components/OnChangeEvent";
import ColorPicker from "./Components/colorPicker";
import Car from "./Components/Car";
import Food from "./Components/Food";
import NewCar from "./Components/NewCar";
import ToDoList from "./Components/ToDoList";

function App() {  
   
  return(
    
    <>
    <ToDoList></ToDoList>
    <NewCar></NewCar>
    <Food></Food>
    <Car></Car>
     <ColorPicker/>
    <Eventt></Eventt>
    <Counter></Counter>  
    {/* <Componentss></Componentss>  */}
    
    </>
  );  
}

export default App
