import React from 'react'

// Components
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffects from '../components/HookUseEffects';
import HookUseRef from '../components/HookUseRef';
import HookUseCallback from '../components/HookUseCallback';
import HookUseMemo from '../components/HookUseMemo';
import HookUseLayoutEffect from '../components/HookUseLayoutEffect';
import HookUseImperativeHandle from '../components/HookUseImperativeHandle';
import { SomeContext } from '../components/HookUseContext';
import HookCustom from '../components/HookCustom';

// useContext
import { useContext } from 'react';


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
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustom />
    </div>
  );
};

export default Home;