import { RedocStandalone } from 'redoc';
import spec from './ApiDefinition.json';

function App() {
  return (
    <RedocStandalone spec={spec}/>
  ); 
}

export default App;
