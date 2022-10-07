import '../App.scss';

import MainHeader from './MainHeader';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';

function Home() {
  return (
    <div className='home'>
      <MainHeader />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <br />
    </div>
  );
}

export default Home;