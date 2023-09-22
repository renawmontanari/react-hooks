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

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Executar</button>
        <hr />
    </div>
  );
};

export default HookUseEffects;