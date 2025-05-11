// import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Public from "./components/Public";
import Login from "./features/auth/Login";
import DashLayout from "./components/DashLayout";
import Welcome from "./features/Welcome";
import NotesList from "./features/notes/NotesList";
import UsersList from "./features/users/UsersList";

function App() {
  // console.log({
  //   Layout,
  //   Public,
  //   Login,
  //   DashLayout,
  //   Welcome,
  //   NotesList,
  //   UsersList,
  // });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />} />

          <Route path="notes">
            <Route index element={<NotesList />} />
          </Route>

          <Route path="users">
            <Route index element={<UsersList />} />
          </Route>
        </Route>{" "}
        {/* End Dash */}
      </Route>
    </Routes>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
