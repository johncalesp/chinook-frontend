import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Error, Login, MainMenu, InvoiceDetails } from './pages';
import { PrivateRoute } from './components';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainMenu />
            </PrivateRoute>
          }
        />
        <Route
          path="/invoice/:id"
          element={
            <PrivateRoute>
              <InvoiceDetails />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
