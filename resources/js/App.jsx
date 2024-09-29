//src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import PrivateRoute from './components/PrivateRoute'; 

import HomePage from './components/frontend/HomePage';
import FrontendLayout from './layouts/frontend/FrontendLayout';
import SinglePost from './components/frontend/SinglePost';
import SingleVideo from './components/frontend/SingleVideo';
import CategoryPost from './components/frontend/CategoryPost';
import SubCategoryPost from './components/frontend/SubCategoryPost';
import DivisionPosts from './components/frontend/DivisionPosts';
import DistrictPosts from './components/frontend/DistrictPosts';

import AdminLayout from './layouts/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';

import AuthRole from './components/admin/auth/AuthRole';
import UserPermissions from './components/admin/auth/UserPermissions';
import Users from './components/admin/auth/Users';
import Division from './components/admin/division/Division';
import District from './components/admin/division/District';
import Category from './components/admin/category/Category';
import SubCategory from './components/admin/category/SubCategory';
import Tags from './components/admin/category/Tags';
import PostList from './components/admin/posts/PostList';
import PostForm from './components/admin/posts/PostForm';
import VideoNews from './components/admin/posts/VideoNews';
import VideoForm from './components/admin/posts/VideoForm';
import HeaderInfo from './components/admin/settings/HeaderInfo';
import FooterInfo from './components/admin/settings/FooterInfo';
import Menu from './components/admin/settings/Menu';
import SubMenu from './components/admin/settings/SubMenu';
import Advertising from './components/admin/advertising/Advertising';

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <PrivateRoute />, 
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: "", element: <AdminDashboard /> },
          { path: "role", element: <AuthRole /> },
          { path: "permission", element: <UserPermissions /> },
          { path: "users", element: <Users /> },
          { path: "division", element: <Division /> },
          { path: "district", element: <District /> },
          { path: "categories", element: <Category /> },
          { path: "sub-categories", element: <SubCategory /> },
          { path: "tags", element: <Tags /> },
          { path: "posts", element: <PostList /> },
          { path: "posts/create", element: <PostForm /> },
          { path: "posts/edit/:postId", element: <PostForm /> },
          {path:"video-news", element:<VideoNews />},
          {path:"video-news/create", element:<VideoForm />},
          {path:"video-news/edit/:id", element:<VideoForm />},
          {path:"header-settings", element:<HeaderInfo />},
          {path:"footer-settings", element:<FooterInfo />},

          {path:"menu-settings", element:<Menu />},
          {path:"sub-menu-settings", element:<SubMenu />},
          {path:"advertising", element:<Advertising />},
          
          
        ],
      },
    ],
  },
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/post/:postId", element: <SinglePost /> }, 
      { path: "/video-news/:id", element: <SingleVideo /> }, 
      { path: "/category/:categoryId/posts", element: <CategoryPost /> }, 
      { path: "/category/:categoryId/subcategory/:subcatId/posts", element: <SubCategoryPost /> }, 
      { path: "/division/:divisionId/posts", element: <DivisionPosts /> }, 
      { path: "/district/:districtId/posts", element: <DistrictPosts /> }, 
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
