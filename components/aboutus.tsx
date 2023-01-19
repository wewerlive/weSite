import { getSession, GetSessionParams } from 'next-auth/react';
// import Link from 'next/link';
// import styles from '../styles/Home.module.css';
// signIn,
//   signOut,
//   useSession,

export const getServerSideProps = async (context: GetSessionParams) => {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
};

const AboutUs: React.FC = () => {
  // const { data: session } = useSession();
  return (
    <section
      id="Join"
      className="flex flex-col bg-gray-200 text-black py-20 text-3xl md:text-4xl"
    >
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>Virtual Reality</strong> is a technology that immerses you in
          a virtual world. It is a technology that allows you to experience a
          different reality. Join us in this journey to explore the world of
          Virtual Reality.
        </p>
        {/* <div className="leading-tight items-center gap-9 flex max-w-5xl text-center mt-10 mx-auto text-xl tracking-tight ">
          <button
            onClick={() => (session ? signOut() : signIn())}
            className={`${styles.bgBtn} bg-slate-400 text-black outline-none p-4 font-bold rounded-2xl hover:underline hover:underline-offset-4`}
          >
            {session ? 'Sign Out' : 'Sign In'}
          </button>
          {session && (
            <Link href={`${session}`}>
              <a
                className={`${styles.bgBtn} bg-red-400 text-black outline-none p-4 font-bold rounded-2xl hover:underline hover:underline-offset-4`}
              >
                Join Room
              </a>
            </Link>
          )}
          <h2 className="font-bold hover:underline hover:underline-offset-4">
            <Link href="#ContactUs">
              <a>Register</a>
            </Link>
          </h2>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
