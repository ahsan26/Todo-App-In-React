import React, { Component } from 'react';
import Todo from "./each_todo";
import Todo_Add from "./todo_adder";
import { capitialize } from "../services/services";
export default class Todos extends Component {
    constructor() {
        super();
        this.state = {
            todos: []
        }
    }
    add = new_todo => {
        let todos_copy = this.state.todos;
        todos_copy.push(capitialize(new_todo));
        this.setState({ todos: todos_copy });
    }
    update_todo = (i, txt) => {
        let todos_copy = this.state.todos;
        todos_copy[i] = txt;
        this.setState({ todos: todos_copy });
    }
    delete_todo = (i) => {
        let todos_copy = this.state.todos;
        todos_copy.splice(i, 1);
        this.setState({ todos: todos_copy });
    }
    renderNoraml() {
        return (
            <div>
                <Todo_Add add={this.add} />
                <div className="todos_main_container">
                    {
                        this.state.todos.map((item, index) => {
                            return <Todo key={index} update={this.update_todo} del={this.delete_todo} i={index}>{item}</Todo>
                        })
                    }
                </div>
            </div>
        );
    }
    renderEmpty() {
        return (
            <div>
                <Todo_Add add={this.add} />
                <p id="none_todo_indicator">0 Todos</p>
            </div>
        );
    }
    render() {
        if (this.state.todos.length) {
            return this.renderNoraml();
        } else {
            return this.renderEmpty();
        }
    }
}