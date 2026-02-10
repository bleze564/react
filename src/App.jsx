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
import data from "./todo.json"
class App extends Component {
  state = {
    name: "",
    mail: "",
    expirence:"",
    todos: initialTodos,
    filter: '',
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (ev) => {
    ev.preventDefault();
    thisSetS;
  };
  componentDidUpdate(prevProps, prevstate){
    if (prevState.todos !== this.state.todos){
      console.log(this.state.todos) 
      window.localStorage.setItem('todos', JSON.stringify(this.state.todos))
      
    }
  }

  render() {
    return (
//       <main className="main">
//         <div className="main-div">
//           {/* <StickerList stickers={stickers} /> */}
//           <form>
//             <label>
//               {""}
//               Ім'я
//               <input
//                 onChange={this.handleChange}
//                 type=""
//                 name="name"
//                 value={this.state.name}
//               />
//             </label>
//             <hr />
//             <label>
//               {" "}
//               Електронна адреса
//               <input
//                 onChange={this.handleChange}
//                 type="email"
//                 name="mail"
//                 value={this.state.mail}
//               />
//             </label>
//             <hr />
// <b>Професійний рівень</b>
//           <hr />
//           <label> junior
//             <input  onChange={this.handleChange} type="radio" name="expirence" value='junior' checked = {this.state.expirence === 'junior'} />
//           </label>
//           <label> middle
//             <input onChange={this.handleChange} type="radio" name="expirence" value='middle' checked = {this.state.expirence === 'middle'}/>
//           </label>
//           <label> senior
//             <input onChange={this.handleChange} type="radio" name="expirence" value='senior' checked = {this.state.expirence === 'senior'}/>
//           </label>
//           </form>
//         </div>
//       </main>
<TodoList data={data}/>
)}
}

export default App;
