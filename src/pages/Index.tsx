import LightRays from "@/components/LightRays";
import EventAnnouncement from "@/components/EventAnnouncement";
import FloatingDockNav from "@/components/FloatingDockNav";
import UpcomingMovie from "@/components/UpcomingMovie";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background">
      {/* Background Layer - Light Rays Animation */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#4a9eff"
          raysSpeed={2.0}
          lightSpread={0.8}
          rayLength={1.5}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.05}
          distortion={0.05}
          className="h-full w-full"
        />
      </div>

      {/* Floating Dock Navigation */}
      <FloatingDockNav />

      {/* Main Content Area */}
      <main className="relative z-10 w-full flex flex-col items-center justify-start py-10 space-y-20 pt-32">
        <EventAnnouncement />
        <UpcomingMovie />
      </main>
    </div>
  );
};

export default Index;
