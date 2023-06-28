import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from './app/store'

import './index.css';
import App from './app/App';
import Skills from './components/Skills'
import Contact from './components/Contact'
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
    path: "skills",
    element: <BaseLayout><Skills /></BaseLayout>
  },
  {
    path: "contact",
    element: <BaseLayout><Contact /></BaseLayout>
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
