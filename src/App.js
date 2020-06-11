import React from 'react';
import './App.css';
import withFetch from './HOC/withFetch'
import Test from './components/Test'

const url = (anchor) => (process.env.REACT_APP_URL + anchor)

function App() {
  return (
    <div className="App">
      <div><TestError /></div>
      <div><TestData /></div>
      <div><TestLoading /></div>
    </div>
  );
}

const TestError = withFetch(url)(Test, 'error')
const TestData = withFetch(url)(Test, 'data')
const TestLoading = withFetch(url)(Test, 'loading')

export default App;
