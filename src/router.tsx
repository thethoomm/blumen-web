import { Route, Routes } from "react-router";
import MainLayout from "@/layouts/main-layout";
import Home from "@/pages/home";
import PlantDetails from "@/pages/plant-details";
import NotFound from "@/pages/not-found";
import Register from "@/pages/register";
import AboutUs from "@/pages/about-us";

export function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products/:plantId" element={<PlantDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
