import "./App.css";
// import { Name } from './components/name';
// import { Obj } from './components/obj';
// import { PaintingList } from './components/paintingList';
// import paintingData from './painting.json'
import { Status } from "./components/Status";
import { UserCard } from "./components/UserCard";
const user1 = {
  name: "Олена",
  age: 20,
  city: "Львів",
  status:true
};
const products = ["Хліб", "Молоко", "Сир", "Яблука"];
const App = () => {
  return (
    <main className="main">
      <div className="main-div">
        <UserCard name={user1.name} age={user1.age} city={user1.city} />
        <Status isOnline={user1.status}/>
      </div>
    </main>
  );
};
export default App;
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
