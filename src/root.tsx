// @refresh reload
import { createEffect, createSignal, Suspense } from 'solid-js';
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start';
import './root.css';

export default function Root() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname
      ? 'border-sky-600'
      : 'border-transparent hover:border-sky-600';

  const [blur, setBlur] = createSignal(true);

  createEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 20 ? setBlur(false) : setBlur(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [blur]);

  return (
    <Html lang='en'>
      <Head>
        <Title>Wewer-Suite</Title>
        <Meta charset='utf-8' />
        <Meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <Meta
          name='description'
          content='Wewer-Suite'
        />
        <Meta
          name='theme-color'
          content='#000000'
        />
        <link
          rel='icon'
          href='favicon.png'
        />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <nav
              class='container flex p-2 fixed bg-slate-50/5 rounded-full mx-4 my-2 backdrop-blur'
            >
              <div class='flex items-center w-64'>
                <img
                  src='logo.png'
                  alt='logo'
                  class='mx-auto h-8 w-12'
                />
              </div>
              <ul class='container flex items-center justify-center p-3 -ml-48 text-gray-200'>
                <li class={`border-b-2 ${active('/')} mx-1.5 sm:mx-6`}>
                  <A href='/'>Home</A>
                </li>
                <li class={`border-b-2 ${active('#About')} mx-1.5 sm:mx-6`}>
                  <A href='#About'>About Us</A>
                </li>
                <li class={`border-b-2 ${active('#Services')} mx-1.5 sm:mx-6`}>
                  <A href='#Services'>Services</A>
                </li>
              </ul>
            </nav>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
