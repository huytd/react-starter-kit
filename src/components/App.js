import React from 'react';
import Card from './Card';

class App extends React.Component {
  render() {
    return <div className='app-container'>
      <h1>React Starter Kit</h1>
      <Card><b>Version:</b> v1.0</Card>
    </div>;
  }
}

export default App;
