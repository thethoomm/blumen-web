import { Route, Routes } from "react-router";
import Home from "@/pages/home";
import MainLayout from "./layouts/main-layout";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
