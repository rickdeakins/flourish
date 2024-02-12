import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About';
import Artists from './pages/Artists';
import ErrorPage from './pages/Error';
import ArtistsByGenre from './pages/ArtistsByGenre.jsx';
import ContactPage from './pages/Contact.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/profiles/:artistId',
        element: <Artists />
      },
      {
        path: '/genre/:genreId', // Update the parameter name to match the ArtistsByGenre component
        element: <ArtistsByGenre />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
