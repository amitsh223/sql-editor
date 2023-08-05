import styled from "@emotion/styled";
import { Header } from "./Components/Header";
import { MainLayout } from "./Components/MainLayout";
import { ThemeProvider, createTheme } from "@mui/material";
import HistoryState from "./Components/ContextApi/HistoryState";

const theme = createTheme({
  palette: {
    primary: {
      main: "#127FBF",
      light: "",
    },
    secondary: {
      main: "#81DEFD",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <HistoryState>
          <MainLayout />
        </HistoryState>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
