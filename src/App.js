// Outlet: An <Outlet> should be used in parent route element to render their child route elements. This allows nested UI to show up when child routes are rendered.
// FYI: We dont need outlet necessarily because we can simply put our headers into EACH component but then that would make our code not DRY
// Think of the App.js file as our file that holds the headers PLUS our component
// In App.js we need to add in the outlet

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
const App = () => {
  return(
    <div className='App'>
      <Header/>
      <Outlet />
    </div>
  )
}

export default App

// Keep in mind: the ORDER IN WHICH THE route element and thier paths matter.