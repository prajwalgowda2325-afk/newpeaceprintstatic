import logo from "@/assets/logo.png";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        <img
          src={logo}
          alt="Peace Prints Logo"
          className="w-40 h-40 object-contain animate-pulse"
        />
        <h1 className="font-harlow text-4xl text-foreground">
          Peace<span className="text-primary">Print&apos;s</span>
        </h1>
      </div>
    </div>
  );
};

export default SplashScreen;
