import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Loading from "./components/loading/Loading";

const LazyMainPage = lazy(() => import("./pages/IndexPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Suspense fallback={<Loading />}>
          <LazyMainPage />
        </Suspense>
      </Routes>
    </BrowserRouter>
  )
}

export default App