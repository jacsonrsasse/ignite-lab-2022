import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Video />
                <Sidebar />
            </main>
        </div>
    );
}
// figma.com/file/8SVXqPpT0U8HplGNNU03MZ/Plataforma-de-evento--Ignite-Lab?node-id=8%3A399
