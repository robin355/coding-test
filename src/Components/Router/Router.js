import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import ProblemOne from "../ProblemOne/ProblemOne";
import ProblemTwo from "../ProblemTwo/ProblemTwo";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/problem-one',
        element: <ProblemOne></ProblemOne>
    },
    {
        path: '/problem-two',
        element: <ProblemTwo></ProblemTwo>

    }
])