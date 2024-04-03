import React  from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from './root';
import { LoginPage } from '../pages/loginPage.js';
import { Projects } from '../pages/projects.js';
import { MyTracker } from '../pages/myTracker.js';

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route>
            <Route path='/' element={<LoginPage></LoginPage>}/>
          </Route>
          <Route  element={<Root />}> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/mytracker" element={<MyTracker />} />
          </Route>
    </Route>
  )
)


export default router;
