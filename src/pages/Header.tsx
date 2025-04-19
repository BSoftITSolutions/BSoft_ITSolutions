import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md">
      <div className="container flex p-3 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/public/bsoft.png" alt="TheWorkPlace" width={80} height={100} />
          <span className="text-lg font-bold text-green-500">BSoft IT Solutions</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about-us" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" },
          ].map(({ name, path }) => (
            <Button
              key={path}
              onClick={() => navigate(path)}
              className={`text-sm font-medium hover:bg-transparent bg-transparent shadow-none ${
                location.pathname === path ? "text-green-600 font-bold" : "text-muted-foreground"
              }`}
            >
              {name}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
