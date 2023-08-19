import { Route, Routes } from 'react-router-dom';
import Topbar from './scenes/Global/Topbar/Topbar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './scenes/Dashboard/Dashboard';
import Sidebar from './scenes/Global/Sidebar/Sidebar';
import Team from './scenes/Team/Team';
import Contacts from './scenes/Contacts/Contacts';
import Invoices from './scenes/Invoices/Invoices';
import ProfileForm from './scenes/ProfileForm/ProfileForm';
import Calendar from './scenes/Calender/Calender';
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
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/profile-form' element={<ProfileForm />} />
              <Route path='/calendar' element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
