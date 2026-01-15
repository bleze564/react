
import "./App.css";
// import { Status } from "./components/Status";
// import { UserCard } from "./components/UserCard";
// import { Counter } from "./components/count/counter";
import { DropDown } from "./components/DropDown/DropDown";
const user1 = {
  name: "Олена",
  age: 20,
  city: "Львів",
  status:true
};
const App = () => {
  return (
    <main className="main">
      <div className="main-div">
        <DropDown/>
        {/* <UserCard name={user1.name} age={user1.age} city={user1.city} /> */}
         {/* <Status isOnline={user1.status}/>
        <AiFillGithub size={300}/>  */}
        {/* <Counter/> */}
      </div>
    </main>
  );
};


export default App;
