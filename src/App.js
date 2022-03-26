import './App.css';
import Header from './components/Header/Header';
import PropsVsState from './components/PropsVsState/PropsVsState';
import ReactWork from './components/ReactWork/ReactWork';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <hr />
      <ReactWork></ReactWork>
      <PropsVsState></PropsVsState>
    </div>
  );
}

export default App;
