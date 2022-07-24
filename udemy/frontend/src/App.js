import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Users from "./user/pages/User"
import NewPlace from './places/pages/NewPlace'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>} />
        <Route path="/places/new" element={<NewPlace/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
