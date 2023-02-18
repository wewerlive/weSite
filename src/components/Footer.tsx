import { A } from 'solid-start';

export default function Footer() {
  return (
    <footer
      id='footer'
      class='container text-center text-white-700 px-4 py-14 bottom-0 w-9/12'
    >
      <div class='flex items-center justify-evenly'>
        <A href='http://linkedin.com'>
          <img
            class='h-[1.5rem] w-[1.5rem] mx-4'
            src='linkedin.png'
            alt='linkedin'
          />
        </A>
        <A href='http://facebook.com'>
          <img
            class='h-[1.5rem] w-[1.5rem] mx-4'
            src='facebook.png'
            alt='facebook'
          />
        </A>
        <A href='http://instagram.com'>
          <img
            class='h-[1.5rem] w-[1.5rem] mx-4'
            src='instagram.png'
            alt='instagram'
          />
        </A>
        <A href='http://twitter.com'>
          <img
            class='h-[1.5rem] w-[1.5rem] mx-4'
            src='twitter.png'
            alt='twitter'
          />
        </A>
        <A href='http://email.com'>
          <img
            class='h-[1.5rem] w-[1.5rem] mx-4'
            src='email.png'
            alt='email'
          />
        </A>
        <div class='flex mx-auto gap-8'>
          <p class='hover:underline-offset-4 hover:underline cursor-pointer font-medium'>
            Contact Us
          </p>
          <p class='hover:underline-offset-4 hover:underline cursor-pointer font-medium'>
            Terms & Services
          </p>
          <p class='hover:underline-offset-4 hover:underline cursor-pointer font-medium'>
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
