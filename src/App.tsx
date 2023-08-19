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
import FAQ from './scenes/Faq/Faq';
import Bar from './scenes/Bar/Bar';
import Pie from './scenes/Pie/Pie';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Line from './scenes/Line/Line';
import Geography from './scenes/Geography/Geography';
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ScrollToTop>
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
                <Route path='/faq' element={<FAQ />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/line' element={<Line />} />
                <Route path='/geography' element={<Geography />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ScrollToTop>
  );
}

export default App;
