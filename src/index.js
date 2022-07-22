import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './component02/App'
import App from './component03/App';




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

