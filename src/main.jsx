import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import RouterPath from './Routes/Index.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterPath/>
  </StrictMode>,
);