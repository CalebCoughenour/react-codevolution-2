import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
    </div>
  );
}

export default App;
