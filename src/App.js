import { Link, Route, Routes } from "react-router-dom";
import { animeData } from "./components/animeData";
import { lazy, Suspense } from "react";
import {
  Navbar,
  Home,
  Footer,
  Search,
  SignIn,
  SignUp,
  Details,
  Loading,
} from "./components";
import "./style/main.scss";
import "./style/global-rules.scss";

// lazy component to fix preformnce

const TopAnime = lazy(() => import("./components/TopAnime/TopAnime"));
const Episodes = lazy(() => import("./components/Episodes/Episodes"));
const LastUpdates = lazy(() => import("./components/LastUpdates/LastUpdates"));
const AllAnime = lazy(() => import("./components/AllAnime/AllAnime"));

function App() {
  return (
    <>
      <Navbar />
      <section className="fixed-height">
        <Routes>
          <Route path="" element={<Home data={animeData} />} />
          <Route
            path="topanime"
            element={
              <Suspense fallback={<Loading />}>
                <TopAnime data={animeData} />
              </Suspense>
            }
          />
          <Route
            path="lastupdates"
            element={
              <Suspense fallback={<Loading />}>
                <LastUpdates data={animeData} />
              </Suspense>
            }
          />
          <Route
            path="episodes"
            element={
              <Suspense fallback={<Loading />}>
                <Episodes data={animeData} />
              </Suspense>
            }
          />
          <Route
            path="allanime"
            element={
              <Suspense fallback={<Loading />}>
                <AllAnime data={animeData} />
              </Suspense>
            }
          />
          <Route path="search" element={<Search />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<Loading />} />
          <Route path="details/:id" element={<Details data={animeData} />} />
          <Route
            path="anime-website"
            element={
              <div className="go-to-page">
                <Link to={"/"}>go to home page</Link>
              </div>
            }
          />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
