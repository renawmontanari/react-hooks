import React, { useEffect, useState } from 'react'

const HookUseEffects = () => {

    // 1- useEffect sem dependências
    useEffect(() => {
        console.log("Estou sendo executado");
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // 2- Array de deps. vazio
    useEffect(() => {
      console.log("Serei executado apenas uma");
    }, []);

    // 3- Item no array de deps.
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
      if (anotherNumber > 0) {
        console.log("Sou executado apenas quando o anotherNumber muda!");
      }
    }, [anotherNumber]); 

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
          Mudar AnotherNumber! 
        </button>
        <hr />
    </div>
  );
};

export default HookUseEffects;