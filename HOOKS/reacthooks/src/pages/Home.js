import React from 'react'

// Components
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffects from '../components/HookUseEffects';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';

// useContext
import { useContext } from 'react';
import { SomeContext } from '../components/HookUseContext';

const Home = () => {  
  const {contextValue} = useContext(SomeContext);

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffects />
        <h2>useContext</h2>
        <p>Valor do context: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookUseCallback />
    </div>
  );
};

export default Home;