import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Category from "../components/Category/Category";
import NewsLayout from "../components/Layout/NewsLayout";
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LoginRegister from "../components/Layout/LoginRegister";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginRegister/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Navigate to={`/category/0`}/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: 'category',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: ':id',
                element: <Category/>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ] 
    },
    {
        path: 'news',
        element: <NewsLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: ':id',
                element: <News/>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`) 
            }
        ]
    }
]);

export default router;