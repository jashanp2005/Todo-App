import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "This is a todo",
            completed: false,
        }
    ],
    // now here  we will give declaration of the methods(note - we will not give functionality here, here only give the name of the method and give the functionality in app.jsx)
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
})

export const useTodo = () => {
    // whenever I give useContext then a context also needs to be given with it, like here TodoContext
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider