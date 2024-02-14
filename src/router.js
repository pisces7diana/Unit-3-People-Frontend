import {
    createBrowserRouter, //allows us to define paths in react router (the url, our loaders, our actions)
    createRoutesFromElements, //is a helper function that that allows paths to be create using Element for example we will be using <Route>
    Route //will be put into the helper 
} from 'react-router-dom';
import App from './App';
import Landing from './pages/Index';
import Show from './pages/Show';
import { peopleLoader, personLoader } from './loaders'; //import person
import { updateAction, createAction, deleteAction } from './actions'; //<------ we just added deleteAction to this

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App /> }>
            <Route path='' element={<Landing/>} loader={peopleLoader}/>
            <Route path=':id' element={<Show/>} loader={personLoader}/>
            <Route path='create' action={createAction}/>
            <Route path='update/:id' action={updateAction}/> 
            <Route path='delete/:id' action={deleteAction}/>  {/*<------ we just added this*/}
        </Route>
    )
)

export default router;
// so if we go to http://localhost:3000/show
// There is a match on the / path and the show path
// Therefore it will render the App.js file and the OUTLET line on the App.js will be the component on Show.js
// Similarly with  http://localhost:3000/david
// There is a match on the / path and the show path
// Therefore it will render the App.js file and the OUTLET line on the App.js will be the component <div>david</div> where that OUTLET LINE is on App.js