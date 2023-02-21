import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { routeConfig } from "shared/routeConfig/routeConfig";

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loadin...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Loadin...</div>}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}
