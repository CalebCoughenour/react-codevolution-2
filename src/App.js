import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <ParentComp />
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
    </div>
  );
}

export default App;
