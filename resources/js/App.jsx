//src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





import AdminLayout from './layouts/admin/AdminLayout';
import AdminDashboard from './components/admin/AdminDashboard';
import HomePage from './components/frontend/HomePage';
import FrontendLayout from './layouts/frontend/FrontendLayout';
import PostList from './components/admin/posts/PostList';
import PostForm from './components/admin/posts/PostForm';

const router = createBrowserRouter([
  {
    path: "/admin",
    //element: <PrivateRoute />, 
    children: [
      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { path: "", element: <AdminDashboard /> },
          { path: "posts", element: <PostList /> },
          { path: "posts/create", element: <PostForm /> },
          { path: "posts/edit/:postId", element: <PostForm /> },
          
        ],
      },
    ],
  },
  {
    path: "/",
    element: <FrontendLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      
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
