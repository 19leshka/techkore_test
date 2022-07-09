import './App.css';
import Menu from "./components/Menu/Menu";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import SettingsArea from "./components/SettingsArea/SettingsArea";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  const [subMenu, setSubMenu] = useState(0)

  return (
      <Provider store={store}>
        <div className="App">
            <div className={"appContainer"}>
                <Menu submenu={subMenu} setSubMenu={setSubMenu}/>
                <Routes>
                    <Route path="settings/*" element={<SettingsArea/>}/>
                    <Route path="*" element={<div></div>}/>
                </Routes>
            </div>
        </div>
      </Provider>
  );
}

export default App;
