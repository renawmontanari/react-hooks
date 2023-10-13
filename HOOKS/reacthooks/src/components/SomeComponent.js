import { forwardRef, useRef, useImperativeHandle } from 'react'

const SomeComponent = forwardRef((props, ref) => {
  const localInputRef = useRef();

  return (
    <div>SomeComponent</div>
  ); 
});

export default SomeComponent;