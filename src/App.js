import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  Footer,
  TopAnime,
  LastUpdates,
  Episodes,
  AllAnime,
  Search,
  SignIn,
  SignUp,
} from "./components";
import "./style/main.scss";
import "./style/global-rules.scss";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="topanime" element={<TopAnime />} />
        <Route path="lastupdates" element={<LastUpdates />} />
        <Route path="episodes" element={<Episodes />} />
        <Route path="allanime" element={<AllAnime />} />
        <Route path="search" element={<Search />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
