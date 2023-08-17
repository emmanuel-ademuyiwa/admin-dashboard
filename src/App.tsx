import { Route, Routes } from 'react-router-dom';
import Topbar from './scenes/Global/Topbar/Topbar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './scenes/Dashboard/Dashboard';
import Sidebar from './scenes/Global/Sidebar/Sidebar';
import Team from './scenes/Team/Team';
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>
          <Sidebar />
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
