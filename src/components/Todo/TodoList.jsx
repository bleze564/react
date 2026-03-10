import React from "react";
export class TodoList extends React.Component {
  state = {};
  render() {
    return (
      <>
        <p>Всього завданнь: {"#"}</p>
        <p>Виконано:{"#"}</p>

        <ul>
          {this.props.todos.map((obj) => {
            return (
              <li key={obj.key}>
                <label id={obj.id}>
                  <input
                    onChange={(event) => {
                      this.props.toogleCompleted(obj.id);
                    }}
                    type="checkbox"
                    name="completed"
                    checked={obj.completed}
                  />
                </label>
                <button
                  type="button"
                  onClick={(event) => {
                    this.props.deleteToDo(obj.id);
                  }}
                >
                  Delete ToDo
                </button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
