
import './App.css';
// import { Name } from './components/name';
// import { Obj } from './components/obj';
import { PaintingList } from './components/paintingList';
import paintingData from './painting.json'
const App = () => {


 return (
    <main className='main'>
      <div className="main-div">
      </div>

        <PaintingList data = {paintingData}/>
    </main>
  )}
export default App;
