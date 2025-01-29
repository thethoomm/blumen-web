import { Outlet } from "react-router";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function MainLayout() {
    return (
        <div className="bg-white h-full w-screen overflow-x-hidden">
            <Navbar />
            <main className="min-h-screen h-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}