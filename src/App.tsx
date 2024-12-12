import { Header, SideBar } from "./layout";
import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Dashboard } from "./screen";


function App() {
  return (
    
    <>
    <Box>
     <Box >
      <Header/>
     </Box>
     <Box display="flex">
      <SideBar/>
      <Dashboard/>
     
     </Box>
    </Box>
     
    </>
    
  );
}

export default App;
