
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error';

import ListApi from './components/ListApi/ListApi';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListApi idRequest={[]}/>,
    errorElement: <Error />
  },{
    path: "characters/:id",
    element: <ListApi idRequest={[]} />
  }
]);

function App() {

  return (
      <ChakraProvider>
        
        <RouterProvider router={router}></RouterProvider>
        
     </ChakraProvider>
  );
}

export default App;
