import { Header, SideBar } from "./layout";
<<<<<<< HEAD
import { Box, } from "@mui/material";
import { Dashboard } from "./screen";
=======
import { Box } from "@mui/material";
import { Routing } from "./routes/Routing";
>>>>>>> f869c801fb326fbaf06d481a5d1d8d746094b224

function App() {
  return (
    <>
      <Header />
      <Box display="flex">
        <SideBar />
        <Box width="100%" height="100vh" overflow="auto">
          <Routing />
        </Box>
      </Box>
    </>
  );
}

export default App;
