import './App.css';
import { useContext } from 'react';
import router from './routing/router.js';
import { RouterProvider } from 'react-router-dom';
import { ContextWrapper } from './context/contextWrapper.js';

function App() {
  const msg = process.env.REACT_APP_MSG
  console.log(msg)
  const context = useContext(ContextWrapper)
  return (
    <div className="container-fluid h-100 p-0 m-0">
      <ContextWrapper value={context}>
        <RouterProvider router={router}/>
      </ContextWrapper>
    </div>
  );
}

export default App;
