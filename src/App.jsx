
import "./App.css";
import { ColorOptions } from "./components/colorpicker/ColorOptions";
import StickerList from "./components/stickerpack/StickerList";
import stickers from "./sticker.json"
// import { Status } from "./components/Status";
// import { UserCard } from "./components/UserCard";
// import { Counter } from "./components/count/counter";
// import { DropDown } from "./components/DropDown/DropDown";
// const user1 = {
//   name: "Олена",
//   age: 20,
//   city: "Львів",
//   status:true
// }; 

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

const App = () => {
  console.log(stickers)
  return (
    <main className="main">
      <div className="main-div">
        {/* <DropDown/> */}
        {/* <UserCard name={user1.name} age={user1.age} city={user1.city} /> */}
         {/* <Status isOnline={user1.status}/>
        <AiFillGithub size={300}/>  */}
        {/* <Counter/> */}
        {/* // <ColorOptions options={colorPickerOptions}/> */}
        <StickerList stickers={stickers}/>
      </div>
    </main>
  );
};


export default App;
