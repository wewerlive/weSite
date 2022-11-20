import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import ScrollObserve from '../components/utils/scroll-observe';
import SizeObserver from '../components/utils/size-observer';
import '../styles/globals.css';

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <>
      <SizeObserver>
        <ScrollObserve>
          <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
          </SessionProvider>
        </ScrollObserve>
      </SizeObserver>
    </>
  );
}

export default MyApp;
