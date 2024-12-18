import { Header, SideBar } from "./layout";
import { Box,} from "@mui/material";
import { Category, Dashboard, Orders, Products  } from "./screen";



function App() {
  return (
    <>
      <Header />
      <Box display="flex">
        <SideBar />
        <Box width="100%" height="100vh" overflow="auto">
          {/* <Dashboard /> */}
          {/* <Orders/> */}
        {/* <Products/> */}
        <Category/>
        </Box>
      </Box>
    </>
  );
}

export default App;
