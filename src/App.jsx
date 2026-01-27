import "./App.css";
import { ColorOptions } from "./components/colorpicker/ColorOptions";
import StickerList from "./components/stickerpack/StickerList";
import stickers from "./sticker.json";
import { Component } from "react";
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

class App extends Component {
  render() {
    return (
      <main className="main">
        <div className="main-div">
          <StickerList stickers={stickers} />
        </div>
      </main>
    );
  }
}

export default App;
