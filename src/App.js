import s from '../src/styles/Home.module.scss'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import SearchSection from './components/SearchSection/SearchSection';
import Journals from './components/Journals/Journals'
import Stats from './components/Stats/Stats';
import PlannedConferencesSection from './components/PlannedConferences/PlannedConferencesSection';
import OrganizationsSection from './components/Organizations/OrganizationsSection';

function App() {
  return (
    <div className={s.container}>
      <Navbar/>
      <Hero/>
      <SearchSection/>
      <Journals/>
      <Stats/>
      <PlannedConferencesSection/>
      <OrganizationsSection/>
    </div>
  );
}

export default App;
