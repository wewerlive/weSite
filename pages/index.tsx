import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import AboutUs from '../components/aboutus';
import Heads from '../components/config';
import Header from '../components/header';
import Skill from '../components/skill';

const Works = dynamic(() => import('../components/works'), { ssr: true });
const TechStack = dynamic(() => import('../components/techstack'), {
  ssr: true,
});
const ContactUs = dynamic(() => import('../components/contactus'), {
  ssr: true,
});
const Footer = dynamic(() => import('../components/footer'), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <Heads />
      <Header />
      <AboutUs />
      <Skill />
      <Works />
      <TechStack />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
