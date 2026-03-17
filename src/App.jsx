import "./App.css";
import { ColorOptions } from "./components/colorpicker/ColorOptions";
import StickerList from "./components/stickerpack/StickerList";
import stickers from "./sticker.json";
import { Component, useState, useEffect } from "react";
import initialTodos from "./todo.json";
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
import data from "./todo.json";
import { TodoEditor } from "./components/Todo/TodoEditor";
import { TodoList } from "./components/Todo/TodoList";
import { PokemonsForm } from "./components/pokemons/pokemonsform";
import { fetchPokemonByName } from "./components/pokemons/PokemonsApi";
import { PokemonInfo } from "./components/pokemons/pokemonsinfo";
import constructWithOptions from "styled-components/dist/constructors/constructWithOptions";

function App() {
  // state = {
  //   name: "",
  //   mail: "",
  //   expirence: "",
  //   todos: initialTodos,
  //   filter: "",
  // };
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPOkemonName] = useState("");
  const [error, setError] = useState("");
  const[loading, setLoading] =useState("")
  const ChangePokemonName = (name) => {
    setPOkemonName(name);
  };
  useEffect(() => {
    if (!pokemonName) {
      return;
    } 
    fetchPokemonByName(pokemonName)
      .then((pokemon) => {
        setPokemon(pokemon);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [pokemonName]);
  if (error) return <p>{error}</p>;

  const [value, setValue] = useState("");

  // handleChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };
  // handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   thisSetS;
  // };
  // componentDidUpdate(prevProps, prevstate) {
  //   if (prevState.todos !== this.state.todos) {
  //     console.log(this.state.todos);
  //     window.localStorage.setItem("todos", JSON.stringify(this.state.todos));
  //   }
  // }
  // addTodo = (value) => {
  //   const newTodo = {
  //     id: new Date(),
  //     text: value,
  //     completed: true,
  //   };
  //   this.setState((prevState) => {
  //     return {
  //       todos: [newTodo, ...prevState.todos],
  //     };
  //   });
  // };
  // дописати методи addtodo deletetodo togletodo
  console.log(pokemon);
  return (
    <div>
      <PokemonInfo pokemon={pokemon} error={error}/>
      <PokemonsForm addPokemonName={ChangePokemonName} />
    </div>

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

    /* {" "}
        <TodoList
          todos={this.state.todos}
          deleteToDo={this.deleteToDo}
          toogleCompleted={this.toogleCompleted}
        />
        <TodoEditor addTodo={this.addTodo} /> */
  );
}

export default App;
