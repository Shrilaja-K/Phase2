// import './App.css'  
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { UserProvider } from "./Components/UserContext";
// import LoginPage from "./Components/LoginPage";
// import WelcomePage from "./Components/WelcomePage";
// import index  from "./Components/index";

// const App: React.FC = () => {
//   return (
//     // <UserProvider>
//     //   <Router>
//     //     <Routes>
//     //       <Route path="/" element={<LoginPage />} />
//     //       <Route path="/welcome" element={<WelcomePage />} />
//     //     </Routes>
//     //   </Router>
//     // </UserProvider>
    
//   );
// };


// function App() {
//   return (
//     <div>
//      <index/> 
//     </div>
//   )
// }

// export default App


// import { useEffect, useState } from "react";
// import { store, buycake, buyIcecream } from "./Index";

// function App() {
//   const [cakes, setCakes] = useState(store.getState().cake.numOfCakes);
//   const [icecreams, setIcecreams] = useState(store.getState().icecream.numOfIcecreams);

//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       const state = store.getState();
//       setCakes(state.cake.numOfCakes);
//       setIcecreams(state.icecream.numOfIcecreams);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div>
//       <h1>Number of Cakes: {cakes}</h1>
//       <h1>Number of Icecreams: {icecreams}</h1>
//       <button onClick={() => store.dispatch(buycake())}>Buy Cake</button>
//       <button onClick={() => store.dispatch(buyIcecream())}>Buy Icecream</button>
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from "react";
// import { store, fetchUsers } from "./Async";

// function App() {

//   const [state, setState] = useState(store.getState());

//   useEffect(() => {
  
//     const unsubscribe = store.subscribe(() => {
//       setState(store.getState());
//     });

   
//     store.dispatch(fetchUsers());

//     return () => unsubscribe();
//   }, []);

//   const { loading, users, error } = state;

//   return (
//     <div>
//       <h1>Users</h1>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       <ul>
//         {users.map((user: any) => (
//           <li key={user}>{user}</li> 
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import CakeContainer from './Components/CakeContainer'
import { Provider } from 'react-redux'
import store from './Redux/Store'
import './App.css'
import Hookscakecontainer from './Components/Hookscakecontainer'
import IcecreamContainer from './Components/IcecreamContainer'
import NewCakeContainer from './Components/NewCakeContainer'
import ItemContainer from './Components/ItemContainer'
import UserContainer from './Components/UserContainer'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <ItemContainer cake />
      <ItemContainer />
      <Hookscakecontainer/>
      <CakeContainer/>
      <IcecreamContainer/>
      <NewCakeContainer/> */}
      <UserContainer/>
    </div>
    </Provider>
  )
}

export default App



