import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './app/store'

import './index.css';
import App from './app/App';
import BaseLayout from './layouts/layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout><App /></BaseLayout>
  },
  {
    path: "about",
    element: <BaseLayout><App /></BaseLayout>
  },
  {
    path: "contact",
    element: <BaseLayout><App /></BaseLayout>
  },
  {
    path: "skills",
    element: <BaseLayout><App /></BaseLayout>
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
