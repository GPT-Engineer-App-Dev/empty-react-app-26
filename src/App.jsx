import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Bananas from "./pages/Bananas.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Container } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Container centerContent>
        {session ? (
          <Button onClick={logout} mt={4}>Logout</Button>
        ) : (
          <Button as="a" href="/login" mt={4}>Login</Button>
        )}
      </Container>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bananas" element={<Bananas />} />
      </Routes>
    </Router>
  );
}

export default App;