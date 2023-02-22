import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sydebar } from "widgets/Sydebar";
import { Suspense } from "react";

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sydebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
