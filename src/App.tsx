import { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Spinner } from './components/Spinner';
import { SidebarProvider } from './context/SidebarContext';
import AdminUserContainer from './components/container/AdminUserContainer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <SidebarProvider>
            <AdminUserContainer>
              <Routes>
                <Route path='/' element={<Dashboard />} />
              </Routes>
            </AdminUserContainer>
        </SidebarProvider>
      </Suspense>
    </Router>
  )
}

export default App
