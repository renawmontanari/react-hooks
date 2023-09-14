
import { useState } from "react";

const HookUseState = () => {

    // useState
    let userName = "João";

    const [name, setName] = useState("Jota");

    const changeNames = () => {

        userName = "João Souza";

        setName("Jota Silva");
    }

  return <div>
    {/* useState */}
    <h2>useState</h2>
    <p>Variável: {userName}</p>
    <p>useState: {name}</p>
    <button onClick={changeNames}>Mudar nomes!</button>
    <hr />
  </div>;
};

export default HookUseState;