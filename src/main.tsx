import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { Animals } from './pages/Animals';
import { ViewAnimal } from './pages/ViewAnimal';
import { animalLoader } from './loaders/animalLoader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  { path: '/', element: <Home></Home>, errorElement: <Error></Error> },
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