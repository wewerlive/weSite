import { getSession, GetSessionParams, useSession } from 'next-auth/react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Room = dynamic(() => import('../Room/Room'), {
  suspense: true,
  ssr: true,
});

const Loading = () => {
  return <div>Loading...</div>;
};

const Login = () => {
  const { status } = useSession({ required: true });
  if (status === 'authenticated') {
    return (
      <div>
        {/* Welcome {session.user?.name}! <br /> */}
        <Suspense fallback={<Loading />}>
          <Room />
        </Suspense>
      </div>
    );
  }
};

export default Login;

export const getServerSideProps = async (context: GetSessionParams) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};
