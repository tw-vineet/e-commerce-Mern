import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header, SideBar } from "./layout";
import { Box } from "@mui/material";
import { routeArray } from "./routes/Routing";


function App() {
  const router = createBrowserRouter(routeArray);
  return <RouterProvider router={router} />;
 
}

export default App;
