import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Animals } from './pages/Animals/Animals';
import { ViewAnimal } from './pages/ViewAnimal/ViewAnimal';
import { animalLoader } from './loaders/animalLoader';
import { ErrorPage } from './pages/Error/ErrorPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  { path: '/', element: <Home></Home>, errorElement: <ErrorPage></ErrorPage> },
  {
    path: '/animals',
    element: <Animals></Animals>,
    children: [],
    loader: animalLoader,
  },
  {
    path: '/animals/:name',
    element: <ViewAnimal></ViewAnimal>,
    loader: animalLoader,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
