import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Navbar, Home, Footer, Search, SignIn, SignUp } from "./components";
import "./style/main.scss";
import "./style/global-rules.scss";

// lazy component to fix preformnce

const TopAnime = lazy(() => import("./components/TopAnime/TopAnime"));
const Episodes = lazy(() => import("./components/Episodes/Episodes"));
const LastUpdates = lazy(() => import("./components/LastUpdates/LastUpdates"));
const AllAnime = lazy(() => import("./components/AllAnime/AllAnime"));

function App() {
  const data = [
    {
      id: 1,
      img_url: "https://www6.0zz0.com/2022/03/06/02/790444475.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 2,
      img_url: "https://www6.0zz0.com/2022/03/06/02/710485597.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 3,
      img_url: "https://www6.0zz0.com/2022/03/06/02/318950532.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 4,
      img_url: "https://www2.0zz0.com/2022/03/06/02/240965075.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 5,
      img_url: "https://www2.0zz0.com/2022/03/06/02/767441479.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 6,
      img_url: "https://www2.0zz0.com/2022/03/06/02/660062424.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 7,
      img_url: "https://www8.0zz0.com/2022/03/06/02/385943453.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 8,
      img_url: "https://www8.0zz0.com/2022/03/06/02/898594064.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 9,
      img_url: "https://www8.0zz0.com/2022/03/06/02/397874978.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 10,
      img_url: "https://www8.0zz0.com/2022/03/06/02/811872045.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 11,
      img_url: "https://www8.0zz0.com/2022/03/06/02/367394410.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 12,
      img_url: "https://www8.0zz0.com/2022/03/06/02/480932897.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 13,
      img_url: "https://www8.0zz0.com/2022/03/06/02/140311752.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 14,
      img_url: "https://www8.0zz0.com/2022/03/06/02/397291373.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 15,
      img_url: "https://www8.0zz0.com/2022/03/06/02/444430007.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 16,
      img_url: "https://www8.0zz0.com/2022/03/06/02/584740940.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 17,
      img_url: "https://www8.0zz0.com/2022/03/06/02/649293020.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 18,
      img_url: "https://www8.0zz0.com/2022/03/06/02/131939749.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 19,
      img_url: "https://www11.0zz0.com/2022/03/06/02/310526501.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
    {
      id: 20,
      img_url: "https://www11.0zz0.com/2022/03/06/02/911233431.jpg",
      title: "Demon Sylar lorem ipsoum angfgd sdsd",
    },
  ];
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home data={data} />} />
        <Route
          path="topanime"
          element={
            <Suspense fallback="loading...">
              <TopAnime data={data} />
            </Suspense>
          }
        />
        <Route
          path="lastupdates"
          element={
            <Suspense fallback="loading">
              <LastUpdates data={data} />
            </Suspense>
          }
        />
        <Route
          path="episodes"
          element={
            <Suspense fallback="loading">
              <Episodes data={data} />
            </Suspense>
          }
        />
        <Route
          path="allanime"
          element={
            <Suspense fallback="loading">
              <AllAnime data={data} />
            </Suspense>
          }
        />
        <Route path="search" element={<Search />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
