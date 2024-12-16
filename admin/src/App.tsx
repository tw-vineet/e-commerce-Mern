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
        <Box sx={{ width: "100%", height: "100vh", overflow: "auto" }}>
          <Dashboard />
        </Box>
      </Box>
    </>
  );
}

export default App;
