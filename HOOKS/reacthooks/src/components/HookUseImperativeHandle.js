import { useRef } from 'react'

// Components
import SomeComponent from './SomeComponent';

const HookUseImperativeHandle = () => {
  const inputRef = useRef();

  return (
    <div>
        <h2>HookUseImperativeHandle</h2>
        <SomeComponent ref={inputRef} />
    </div>
  );
};

export default HookUseImperativeHandle;  