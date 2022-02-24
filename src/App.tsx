import React from 'react';
import './App.css';
import Lists from "./Components/Lists";

// const Box:React.FunctionComponent=({children})=>{

//   return <div>{children}</div>
// };

const Box:React.FunctionComponent<{title:string}>=({title})=>{
  return <div></div>;
};
function App() {
  return (
    <div className="App">
      <Box title="hallo">sdaklfjkaslj</Box>
      <Lists></Lists>
    </div>
  );
}

export default App;
