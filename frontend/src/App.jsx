import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// Pages (create these files)
import Dashboard from "./pages/Dashboard";
import Professionals from "./pages/Professionals";
import ProfessionalDetails from "./pages/ProfessionalDetails";
// import Customers from "./pages/Customers";
// import Bookings from "./pages/Bookings";
 import Services from "./pages/Services";
import LandingPage from "./pages/LandingPage";
// import Payments from "./pages/Payments";
// import Reports from "./pages/Reports";
// import Support from "./pages/Support";
// import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/professionals" element={<Professionals />} />
                <Route path="/professionals/id" element={<ProfessionalDetails />} />
                <Route path="/services" element={<Services />} />
                {/* <Route path="/customers" element={<Customers />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} /> */}
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;