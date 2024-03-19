import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Root from './root';
import { Main } from '../pages/loginPage.js';
import SubmitCandidate from '../components/submitCandidate.js';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route>
            <Route path='/' element={<Main></Main>}/>
          </Route>
          <Route  element={<Root />}> 
            <Route path="/upload" element={<SubmitCandidate />} />
          </Route>
    </Route>
  )
)


export default router;