import DockNav from "@/components/dock/DockNav";
import Agenda from "@/components/widgets/Agenda";
import Countdown from "@/components/widgets/Countdown";
import Forecast from "@/components/widgets/Forecast";
import Notes from "@/components/widgets/Notes";
import PlayingNow from "@/components/widgets/PlayingNow";
import ReadingTracker from "@/components/widgets/ReadingTracker";
import Todos from "@/components/widgets/Todos";
import WatchingList from "@/components/widgets/WatchingList";
import WeatherToday from "@/components/widgets/WeatherToday";
import "@/styles/bento.css";

export default async function Home() {
    return (
        <div className="text-[#bf988a] min-h-screen pb-28 bg-[#031c26]">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
                <div className="bento-grid pt-8">
                    {/* <WeatherToday /> */}
                    <Forecast />
                    <Agenda />
                    <Todos />
                    <Notes />
                    <ReadingTracker />
                    <Countdown />
                    <WatchingList />
                    <PlayingNow />
                </div>
            </div>
            <DockNav />
        </div>
    );
}
