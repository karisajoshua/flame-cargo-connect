import { Link } from "react-router-dom";
import { Plane, Ship, FileCheck, Globe, Warehouse, HardHat, Truck, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import airFreightImage from "@/assets/service-air-freight.jpg";
import seaFreightImage from "@/assets/service-sea-freight.jpg";
import customsImage from "@/assets/service-customs.jpg";
import importExportImage from "@/assets/service-import-export.jpg";
import warehouseImage from "@/assets/service-warehouse.jpg";
import projectCargoImage from "@/assets/service-project-cargo.jpg";

interface ServicesMegaMenuProps {
  isScrolled: boolean;
  isHomePage: boolean;
}

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    slug: "air-freight",
    description: "Fast, reliable air cargo solutions worldwide",
    image: airFreightImage,
  },
  {
    icon: Ship,
    title: "Sea Freight",
    slug: "sea-freight",
    description: "Cost-effective ocean shipping for bulk cargo",
    image: seaFreightImage,
  },
  {
    icon: FileCheck,
    title: "Customs Clearance",
    slug: "customs-clearance",
    description: "Smooth, fast customs processing",
    image: customsImage,
  },
  {
    icon: Globe,
    title: "Import & Export",
    slug: "import-export",
    description: "Compliant cross-border trade solutions",
    image: importExportImage,
  },
  {
    icon: Warehouse,
    title: "Warehousing",
    slug: "warehousing",
    description: "Secure storage and distribution",
    image: warehouseImage,
  },
  {
    icon: HardHat,
    title: "Project Cargo",
    slug: "project-cargo",
    description: "Heavy lift and oversized cargo handling",
    image: projectCargoImage,
  },
];

const ServicesMegaMenu = ({ isScrolled, isHomePage }: ServicesMegaMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState(services[0]);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const useWhiteText = isHomePage && !isScrolled;

  return (
    <div
      ref={menuRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center gap-1 px-4 py-2 rounded-md font-medium transition-colors ${
          useWhiteText
            ? "text-white hover:text-accent hover:bg-white/10"
            : "text-foreground hover:text-accent hover:bg-accent/5"
        }`}
      >
        Services
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="bg-card border rounded-xl shadow-2xl overflow-hidden w-[700px]">
          <div className="grid grid-cols-5">
            {/* Services List */}
            <div className="col-span-3 p-4 space-y-1">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                Our Services
              </div>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${
                    activeService.slug === service.slug
                      ? "bg-accent/10"
                      : "hover:bg-secondary"
                  }`}
                  onMouseEnter={() => setActiveService(service)}
                  onClick={() => setIsOpen(false)}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      activeService.slug === service.slug
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary group-hover:bg-accent/20"
                    }`}
                  >
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{service.title}</div>
                    <div className="text-xs text-muted-foreground">{service.description}</div>
                  </div>
                </Link>
              ))}
              <div className="border-t mt-3 pt-3">
                <Link
                  to="/services"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-accent hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  View All Services →
                </Link>
                <Link
                  to="/courier"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="p-2 rounded-lg bg-secondary">
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Courier Services</div>
                    <div className="text-xs text-muted-foreground">Fast local & international delivery</div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Preview Image */}
            <div className="col-span-2 relative overflow-hidden">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-bold text-lg">{activeService.title}</h3>
                <p className="text-sm text-white/80">{activeService.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
