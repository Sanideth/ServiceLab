import {
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from 'react-router-dom';
import RoutesComponent from './components/RoutesComponent';

const router = createBrowserRouter([{ path: '*', Component: Root }]);

function Root() {
  return (
    <>
      <RoutesComponent /> <ScrollRestoration />
    </>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}
