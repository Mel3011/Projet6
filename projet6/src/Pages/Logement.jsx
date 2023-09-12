import * as React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';


function Logement () {
  // Get the userId param from the URL.
  let { id } = useParams();
  // ...
}

function App() {
  return (
    <Routes>
      <Route path="users">
        <Route path=":id" element={<ProfilePage />} />
        
      </Route>
    </Routes>
  );
}

export default Logement;