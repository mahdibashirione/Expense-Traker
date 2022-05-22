import "./index.css"
import { createRoot } from 'react-dom/client';
import App from "./App";
import Layout from "./layout/layout";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>
);