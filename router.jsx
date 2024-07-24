import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Create from "./src/pages/Create";
import Update from "./src/pages/Update";
import Blog from "./src/components/Blog";
import Layout from "./src/components/layout/Layout";

export const router = createBrowserRouter([
{
    path: '/',
    element: <Layout />,
    children:[
        {
            path: '/',
            element: <App />
        },
        {
            path: '/create',
            element: <Create />
        },
        {
            path: '/update',
            element: <Update />
        },
        {
            path: '/blog',
            element: <Blog />
        },
    ]

},
    
])