import Header from './components/ui/Header';
import FloatingLogo from './components/ui/FloatingLogo';
import AnimatedBackground from './components/ui/AnimatedBackground';
import Hero from './components/sections/Hero';
import Overview from './components/sections/Overview';
import TrustedPartners from './components/sections/TrustedPartners';
import Manufacturing from './components/sections/Manufacturing';
import Quality from './components/sections/Quality';
import Products from './components/sections/Products';
import Assurance from './components/sections/Assurance';
import Advantage from './components/sections/Advantage';
import Vision from './components/sections/Vision';

import GlobalPresence from './components/sections/GlobalPresence';

function App() {
  return (
    <main className="w-full bg-background text-primary min-h-screen selection:bg-accent/30 selection:text-white">
      <Header />
      <FloatingLogo />
      <AnimatedBackground />

      <Hero />
      <Overview />
      <TrustedPartners />
      <GlobalPresence />
      <Manufacturing />
      <Quality />
      <Products />
      <Assurance />
      <Advantage />
      <Vision />
    </main>
  );
}

export default App;
