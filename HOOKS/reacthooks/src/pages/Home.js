import React from 'react'

// Components
import HookUseState from '../components/HookUseState';
import HookUseReducer from '../components/HookUseReducer';
import HookUseEffects from '../components/HookUseEffects';

const Home = () => {  
  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffects />
    </div>
  );
};

export default Home;