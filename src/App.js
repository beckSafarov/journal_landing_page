import s from '../src/styles/Home.module.scss'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import SearchSection from './components/SearchSection/SearchSection';
import Journals from './components/Journals/Journals'
import Stats from './components/Stats/Stats';
import PlannedConferencesSection from './components/PlannedConferences/PlannedConferencesSection';
import OrganizationsSection from './components/Organizations/OrganizationsSection';
import OurAddressSection from './components/OurAddressSection/OurAddressSection';
import Footer from './components/Footer/Footer';
import { useWindowSize } from './hooks/useWindowSize';

function App() {
  const {isDesktop} = useWindowSize()
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Navbar />
        <Hero />
        <SearchSection />
        <Journals />
        <PlannedConferencesSection />
        <OrganizationsSection />
        <OurAddressSection />
        {isDesktop && (
          <>
            {/* <Stats /> */}
            <Footer /></>
        )}
      </div>
    </div>
  );
}

export default App;
