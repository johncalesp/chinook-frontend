import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Landing,
  Error,
  Login,
  InvoiceDetails,
  Profile,
  PageInvoices,
  UserTracks,
  NewTracks,
} from './pages';
import { PrivateRoute, NavBar } from './components';

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
              <NavBar />
            </PrivateRoute>
          }
        >
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="invoices"
            element={
              <PrivateRoute>
                <PageInvoices />
              </PrivateRoute>
            }
          />
          <Route
            path="invoice/:id"
            element={
              <PrivateRoute>
                <InvoiceDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="usertracks"
            element={
              <PrivateRoute>
                <UserTracks />
              </PrivateRoute>
            }
          />
          <Route
            path="newtracks"
            element={
              <PrivateRoute>
                <NewTracks />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
