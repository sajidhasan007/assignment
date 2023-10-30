import { lazy } from "react";

const TopBar = lazy(() => import("./TopBar"));
const SecondTopBar = lazy(() => import("./SecondTopBar"));
const MainSection = lazy(() => import("./MainSection"));
const Footer = lazy(() => import("./Footer"));
export { TopBar, SecondTopBar, MainSection, Footer };
