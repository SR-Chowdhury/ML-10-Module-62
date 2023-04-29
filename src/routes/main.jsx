import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Category from "../components/Category/Category";
import NewsLayout from "../components/Layout/NewsLayout";
import News from "../Pages/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/category/:id',
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