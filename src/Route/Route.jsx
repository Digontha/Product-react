
import { createBrowserRouter } from 'react-router-dom';
import Nav from '../component/Navber/Nav';
import Home from '../component/Home/Home';
import Product from '../component/Products/Product';
import AddProduct from '../component/Products/AddProduct';
import Dashboard from '../component/Dashboard/Dashboard';
import DashboardDetails from '../component/Dashboard/DashboardDetails';
import Profile from '../component/Profile/Profile';
import EditProfile from '../component/EditProfile/EditProfile';


const mainOutlet = createBrowserRouter([
    {
      path: "/",
      element: <Nav></Nav>,
      children:[
        {
            path:'/',
            loader:()=>fetch("https://dummyjson.com/products"),
            element:<Home></Home>
          },
          {
            path:'/products',
            loader:()=>fetch("https://dummyjson.com/products"),
            element:<Product></Product>
          }
          ,
          {
            path:'/products/:id',
            loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`),
            element:<AddProduct></AddProduct>
          },
          {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
            children:[
              {
                path:'/dashboard',
                element:<DashboardDetails></DashboardDetails>
              },
              {
                path:'/dashboard/profile',
                element:<Profile></Profile>
              },
              {
                path:'/dashboard/editProfile',
                element:<EditProfile></EditProfile>
              }
            ]
            
          }
      ]
    }
    
    
  
  ]);

  export default mainOutlet