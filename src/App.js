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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import Activities from 'pages/Activities';

function App({children}) {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/activities', element: <Activities/> },
        { path: '/activities/:id', element: <Activity /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/newactivity', element: <NewActivity /> }
      ]
    }
  ])
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;