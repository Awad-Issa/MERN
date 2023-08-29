import "./components/Tab"
import Tab from "./components/Tab";
function App() {

  const tabItems = [
    {label: 'Tab 1', content: 'Content for Tab 1'},
    {label: 'Tab 2', content: 'Content for Tab 2'},
    {label: 'Tab 3', content: 'Content for Tab 3'},
  ];
  return (
      <>
      <Tab item={tabItems}/>
      </>
);
};
export default App;
