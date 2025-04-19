import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Homepage from './pages/Home'
import ServicesPage from './pages/Services'
import AboutUsPage from './pages/Aboutus'
import ContactPage from './pages/Contact'
import Header from './pages/Header'

function App() {
  const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
      </div>
    )
  }
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout><Homepage /></DashboardLayout>} />
          <Route path="/services" element={<DashboardLayout><ServicesPage /></DashboardLayout>} />
          <Route path="/about-us" element={<DashboardLayout><AboutUsPage/></DashboardLayout>}/>
          <Route path="/contact" element={<DashboardLayout><ContactPage/></DashboardLayout>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;