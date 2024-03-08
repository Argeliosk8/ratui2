import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Root from './root';
import { Main } from '../pages/main.js';
import { SubmitCandidate } from '../pages/submitCandidate.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route  element={<Root />}> 
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<SubmitCandidate />} />
      </Route>
    </Route>
  )
)


export default router;