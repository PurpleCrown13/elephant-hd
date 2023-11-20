import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { FilmPage } from './pages/Film.page';
import { ServerError } from './pages/Error.page';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/watch/:id',
    element: <FilmPage />,
  },
  {
    path: '/error',
    element: <ServerError />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
