import About from '~/components/about/About';
import Footer from '~/components/Footer';
import HomeLeft from '~/components/home/HomeLeft';
import HomeRight from '~/components/home/HomeRight';
import Services from '~/components/service/Service';

export default function Home() {
  return (
    <main>
      <section
        class='container flex gap-2 mx-auto text-white-700 p-8 '
      >
        <HomeLeft />
        <HomeRight />
      </section>
      <About />
      <Services />
      <Footer />
    </main>
  );
}
