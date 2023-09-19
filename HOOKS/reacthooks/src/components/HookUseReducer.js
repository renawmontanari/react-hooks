import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {
    // 1- Começando com o useReducer
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state);
    });

    // 2- Avançando no useReducer
    const initialTaks = [
      {id: 1, text: "Fazer alguma coisa"},
      {id: 2, text: "Fazer outra coisa"}
    ]

    const taskReducer = (state, action) => {
      switch (action.type) {
        case "ADD":
          const newTask = {
            id: Math.random(),
            text: taskText
          };

          setTaskText("");

          return [...state, newTask];
      }
    }

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks);
    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();

      dispatchTasks({ type: "ADD" });
    };

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar número</button>
        <hr />
        <h3>Tarefas:</h3>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            onChange={(e) => setTaskText(e.target.value)} 
            value={taskText}
          />
          <input 
            type="submit" value="Enviar" 
          />
        </form>
        {tasks.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
    </div>
  );
};

export default HookUseReducer;