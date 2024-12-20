import { Header, SideBar } from "./layout";
import { Box,} from "@mui/material";
import { Dashboard, Login, Register } from "./screen";

function App() {
  return (
    <>
      <Header />
      <Box display="flex">
        <SideBar />
        <Box width="100%" height="100vh" overflow="auto">
          <Dashboard />
        </Box>
      </Box>
     
    </>
  );
}

export default App;
