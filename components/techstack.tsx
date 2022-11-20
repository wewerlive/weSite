import Logo from './logos';
import styles from '../styles/Home.module.css';

const TechStack: React.FC = () => (
  <section
    className={`text-black min-h-screen justify-center gap-16 md:gap-32 flex flex-col ${styles.bg}`}
  >
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl mb-10 font-bold text-center">
        <span className="whitespace-nowrap">
          TechStack we&apos;ve worked with
        </span>
        .
      </h3>
      <Logo />
    </div>
    <div className="flex flex-col justify-center items-center ">
      <div className="container mx-auto lg:max-w-[70%] lg:px-10">
        <h3 className="text-3xl font-bold lg:4xl tracking-tight text-center px-10 !leading-[3.5rem]">
          We believe in great communication and efficient productive
          process.
        </h3>
      </div>
    </div>
  </section>
);

export default TechStack;
