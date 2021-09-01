import React from 'react';

import RouteApp from './components/RouteApp';
import Login from './components/Main/Login';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  if (!code) { return <Login /> }
  return (
    <main className="flex justify-center">
      <RouteApp code={code} />
    </main>
  )
}

export default App;