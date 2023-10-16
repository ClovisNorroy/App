import MyActivities from 'pages/MyActivities';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import RootLayout from 'pages/Root';
import PageNotFound from 'pages/PageNotFound';
import Activity from 'pages/Activity';
import Login from 'pages/Login';
import Signup from 'pages/Signup';
import NewActivity from 'pages/NewActivity';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/activities', element: <MyActivities /> },
        { path: '/activities/:id', element: <Activity /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/newactivity', element: <NewActivity /> }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;