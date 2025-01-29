import { Route, Routes } from "react-router";
import MainLayout from "@/layouts/main-layout";
import Home from "@/pages/home";
import PlantDetails from "@/pages/plant-details";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:plantId" element={<PlantDetails />} />
      </Route>
    </Routes>
  );
}
