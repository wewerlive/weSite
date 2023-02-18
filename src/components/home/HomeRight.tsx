
export default function HomeLeft() {
  return (
    <div class='h-screen w-full flex flex-col justify-center -mt-8 pl-8 items-center border-white'>
      <div>
        {/* pull the grid as separate component image */}
        <img
          src='character.png'
          alt='character'
          class='h-screen w-38 mt-10'
        />
        <svg
          class='absolute top-36 right-0 -z-10 blur-3xl'
          width='641'
          height='330'
          viewBox='0 0 641 490'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_171_17)'>
            <ellipse
              cx='367.5'
              cy='245'
              rx='219.5'
              ry='97'
              fill='#4FF0F0'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_171_17'
              x='0'
              y='0'
              width='735'
              height='490'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood
                flood-opacity='0'
                result='BackgroundImageFix'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='74'
                result='effect1_foregroundBlur_171_17'
              />
            </filter>
          </defs>
        </svg>
        <svg
          class='absolute top-60 right-0 -z-20 blur-3xl'
          width='651'
          height='350'
          viewBox='0 0 651 441'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_f_171_18)'>
            <ellipse
              cx='366'
              cy='241'
              rx='218'
              ry='93'
              fill='#D04FF0'
            />
          </g>
          <defs>
            <filter
              id='filter0_f_171_18'
              x='0'
              y='0'
              width='732'
              height='482'
              filterUnits='userSpaceOnUse'
              color-interpolation-filters='sRGB'
            >
              <feFlood
                flood-opacity='0'
                result='BackgroundImageFix'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='74'
                result='effect1_foregroundBlur_171_18'
              />
            </filter>
          </defs>
        </svg>
        <img src='Ellipsefloor.png' class='absolute top-3/4 right-8 -z-30 blur-sm'/>
      </div>
    </div>
  );
}
