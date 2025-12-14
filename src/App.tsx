import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Courier from "./pages/Courier";
import Track from "./pages/Track";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AirFreight from "./pages/services/AirFreight";
import SeaFreight from "./pages/services/SeaFreight";
import CustomsClearance from "./pages/services/CustomsClearance";
import ImportExport from "./pages/services/ImportExport";
import Warehousing from "./pages/services/Warehousing";
import ProjectCargo from "./pages/services/ProjectCargo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/sea-freight" element={<SeaFreight />} />
            <Route path="/services/customs-clearance" element={<CustomsClearance />} />
            <Route path="/services/import-export" element={<ImportExport />} />
            <Route path="/services/warehousing" element={<Warehousing />} />
            <Route path="/services/project-cargo" element={<ProjectCargo />} />
            <Route path="/courier" element={<Courier />} />
            <Route path="/track" element={<Track />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
