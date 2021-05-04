import { RedocStandalone } from 'redoc';

function App() {
  return (
    <RedocStandalone spec={require("./spec.json")}/>
  );
}

export default App;
