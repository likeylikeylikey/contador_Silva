import React from 'react';
import './Containers/ItemListContainer/ItemListContainer';
import './Navbar/Navbar';
import './MiComponente';
import './Usuarios';

function App() {

  const dash = "Las mejores ofertas";

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={dash}/>
      <MiComponente stock={5}/>
      <Usuarios />
    </>
  )
}

export default App