import React from 'react';
import Customers from '../../src Folder/Components/Customers'
import Graphs from '../../src Folder/Components/Graphs'

function App() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Graphs />
      </div>
      <hr />
      <Customers />
    </div>
  );
}

export default App;
