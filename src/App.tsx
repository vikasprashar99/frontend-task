import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import FeedPage from "./pages/FeedPage";
import Header from "./components/Header";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";


const AppLayout = () => (
  <div className="bg-gray-50 min-h-screen">
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<FeedPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;