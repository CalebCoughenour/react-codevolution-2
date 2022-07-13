import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';

function App() {
  return (
    <div className="App">
      <FocusInput />
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
    </div>
  );
}

export default App;
