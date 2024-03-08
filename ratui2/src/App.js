import './App.css';
import router from './routing/router.js';
import { RouterProvider } from 'react-router-dom';

function App() {
  const msg = process.env.REACT_APP_MSG
  console.log(msg)
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
