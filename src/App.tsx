import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RequestPage from "./pages/RequestPage";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminRequestDetails from "./pages/Admin/AdminRequestDetails";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route
          path="/admin/requests/:requestId"
          element={<AdminRequestDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
