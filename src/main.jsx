import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import RouterPath from './Routes/Index.jsx';
import { UserProvider } from "./Context/UserContext.jsx"

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <UserProvider>
      <RouterPath />
    </UserProvider>
  </StrictMode>,
);


