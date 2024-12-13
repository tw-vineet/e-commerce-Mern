import { Header, SideBar } from "./layout";
import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Dashboard } from "./screen";

function App() {
  return (
    <>
      <Header />
      <Box display="flex">
        <SideBar />
        <Dashboard />
      </Box>
    </>
  );
}

export default App;
