import { Outlet } from "react-router";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function MainLayout() {
    return (
        <div className="bg-white">
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}