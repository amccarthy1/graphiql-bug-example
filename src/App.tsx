import React from 'react';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <GraphiQL fetcher={() => {return {} as any}} />
    </div>
  );
}

export default App;
