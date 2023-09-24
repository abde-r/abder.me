import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
    {
        children: [
            { path: '/', element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'work', element: <Work /> },
            { path: 'contact', element: <Contact /> },
        ]
    }
])