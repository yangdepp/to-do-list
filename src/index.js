import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './component02/App'
import Style from './Style.css'
import Input from "./component02/Input";
import Tab from './component02/Tab'
import TabList from './component02/TabList';
import Tabs from './component02/Tabs';
import Todo from './component02/Todo';



// import { Tab, Tabs, TabList, Panel, PanelList } from './component01'

// function App() {
//   return (
//     <Tabs>
//       <TabList>
//         <Tab>Tab1</Tab>
//         <Tab>Tab2</Tab>
//         <Tab>Tab3</Tab>
//       </TabList>
//       <PanelList>
//         <Panel>Content1</Panel>
//         <Panel>Content2</Panel>
//         <Panel>Content3</Panel>
//       </PanelList>
//     </Tabs>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

