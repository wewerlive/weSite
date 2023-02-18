import { A } from 'solid-start';

export default function HomeLeft() {
  return (
    <div class='h-screen w-full flex flex-col justify-center -mt-14 pl-8 items-center border-white'>
      <div>
        <h1 class='text-5xl font-bold my-10'>Make the world work better</h1>
        <A href='/about'>
          <button class='bg-[#7e43ab] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full'>
            Explore VR
          </button>
        </A>
      </div>
    </div>
  );
}
