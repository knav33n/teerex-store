import router from '@routes/routes';
import { RouterProvider } from 'react-router-dom';
import AppProviders from '@contexts/AppProviders';

const App = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
};

export default App;