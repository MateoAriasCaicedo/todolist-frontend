import { createContext, useState } from "react";
import Singup from "./Singup";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AuthContext = createContext(null);

function App() {
  const [authContext, setAuthContext] = useState(null);

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Singup />} />
          <Route path="/singup" element={<Singup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
export { AuthContext };
