import React, { useEffect } from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListCard from "./Layout/ListCard";
import { SidebarProvider } from "./components/SidebarContext";
import Sidebar from "./Layout/Sidebar";

const App: React.FC = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            window.location.reload();
        }, 60000); // Обновление каждую минуту (60000 миллисекунд)

        return () => clearInterval(interval);
    }, []);

    return (
        <SidebarProvider>
            <Header />
            <main className="p-16 relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('img/vlcsnap-2024-02-23-21h08m32s338.png')" }}>
                <div className="container mx-auto">
                    <ListCard />
                </div>
            </main>
            <Footer />
            <Sidebar />
        </SidebarProvider>
    );
};

export default App;
