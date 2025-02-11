import './App.css'
import Header from './components/Header'
import { useState, useEffect } from 'react'
import Form from './components/Form'
import List from './components/List'
import Footer from './components/Footer'
function App() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : []
    });
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.done).length;
    const addTodo = (description) => {
        const newId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
        const newTodo = {
            id: newId,
            description,
            done: false
        }
        setTodos([...todos, newTodo]);
    };
    const toggleTodo = (id) => {
        const updatedTodos = todos.map(todo => {
           if(todo.id === id){
               return {...todo, done: !todo.done}
           }
           return todo;
        });
        setTodos(updatedTodos);
    }
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };


    return (
        <>
            <Header completed={completedTodos} total={totalTodos} />
            <main>
                <Form onAdd={addTodo} />
                <List todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
            </main>
            <Footer />
        </>
    )
}
export default App