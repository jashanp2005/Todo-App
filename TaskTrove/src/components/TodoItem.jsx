import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const { updateTodo, deleteTodo, toggleComplete } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    return (
        <div className={`flex w-full border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`flex-grow border outline-none bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"} ${todo.completed ? "line-through" : ""} text-black`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 transition-opacity duration-300 ${isTodoEditable ? "opacity-100" : "opacity-0"}`}
                onClick={editTodo}
            >
                📁
            </button>
            <button
                className={`inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 transition-opacity duration-300 ${todo.completed || isTodoEditable ? "opacity-50 cursor-not-allowed" : "opacity-100 cursor-pointer"}`}
                onClick={() => setIsTodoEditable((prev) => !prev)}
                disabled={todo.completed}
            >
                ✏️
            </button>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 transition-opacity duration-300"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;