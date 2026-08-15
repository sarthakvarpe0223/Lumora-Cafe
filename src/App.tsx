import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { FeaturedMenuSection } from '@/sections/FeaturedMenuSection';
import { AboutSection } from '@/sections/AboutSection';
import { WhyChooseSection } from '@/sections/WhyChooseSection';
import { GallerySection } from '@/sections/GallerySection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ReservationSection } from '@/sections/ReservationSection';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:   60 * 1000,
      gcTime:      5 * 60 * 1000,
      retry:       1,
      refetchOnWindowFocus: false,
    },
  },
});

function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Lumora Café">
        <HeroSection />
        <FeaturedMenuSection />
        <AboutSection />
        <WhyChooseSection />
        <GallerySection />
        <TestimonialsSection />
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <a href="#main-content" className="skip-link">
            Skip to content
          </a>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
