type MessageProps = {
  message: string;
  title: string;
};

export function Message(props: MessageProps) {
  const shadow =
    props.title === 'AI'
      ? 'shadow-yellow-500'
      : props.title === 'Ethereum'
      ? 'shadow-purple-500'
      : props.title === 'XR'
      ? 'shadow-red-500'
      : null;

  return (
    <div class={`rounded-3xl p-2 m-2 w-5/6 shadow-lg ${shadow}`}>
      <p class='font-bold text-xl mb-4 mx-2 tracking-wider'>{props.title}</p>
      <p class='font-normal text-md p-2 tracking-tight'>{props.message}</p>
      <p class='font-sans text-sm text-slate-400/90 mx-2 p-1 my-1 bg-gray-800 max-w-fit rounded-md'>
        Read more...
      </p>
    </div>
  );
}

type IconsProps = {
  svg: string;
};

export function Icons(props: IconsProps) {
  const Eth = (
    <>
      <svg
        width='179'
        height='231'
        viewBox='0 0 179 231'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M88.8598 164.966L88.8589 152.79'
          stroke='#14044D'
          stroke-width='3'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M88.8589 99.4014L158.1 127.618L88.8589 164.966V99.4014Z'
          fill='#14044D'
          fill-opacity='0.795578'
          stroke='#14044D'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M88.8588 99.4014V164.966L19.7463 127.735L88.8588 99.4014Z'
          fill='url(#paint0_linear_74_64)'
          fill-opacity='0.795578'
          stroke='#14044D'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M88.8589 164.967V216.599L157.971 127.618L88.8589 164.967Z'
          fill='#37367B'
          fill-opacity='0.796849'
          stroke='#14044D'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M19.7463 127.735L88.8588 216.599V164.966L19.7463 127.735Z'
          fill='#716B94'
          fill-opacity='0.801464'
          stroke='#14044D'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M88.8588 99.4014L157.971 127.618L88.8588 164.966L19.7463 127.735L88.8588 99.4014Z'
          fill='url(#paint1_linear_74_64)'
          fill-opacity='0.816398'
          stroke='#14044D'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M88.8588 87.2251L157.971 115.559L88.8588 152.673L19.7463 115.559L88.8588 87.2251Z'
          fill='#37367B'
          fill-opacity='0.91861'
          stroke='#14044D'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M157.971 115.559L88.8588 10.7715V152.79L157.971 115.559Z'
          fill='#37367B'
          fill-opacity='0.798535'
          stroke='#14044D'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M88.8588 10.7715L19.7463 115.559L88.8588 152.79V10.7715Z'
          fill='#716B94'
          fill-opacity='0.801255'
          stroke='#14044D'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <defs>
          <linearGradient
            id='paint0_linear_74_64'
            x1='19.7463'
            y1='132.184'
            x2='88.8588'
            y2='132.184'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#716B94' />
            <stop
              offset='1'
              stop-color='#37367B'
            />
          </linearGradient>
          <linearGradient
            id='paint1_linear_74_64'
            x1='19.7463'
            y1='132.184'
            x2='157.971'
            y2='132.184'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#716B94' />
            <stop
              offset='1'
              stop-color='#37367B'
            />
          </linearGradient>
        </defs>
      </svg>
      <svg
        width='299'
        height='161'
        viewBox='0 0 299 161'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d_74_52)'>
          <g clip-path='url(#clip0_74_52)'>
            <rect
              width='259'
              height='213'
              transform='matrix(0.991445 -0.130526 0.707107 0.707107 20 21.7087)'
              fill='url(#paint0_linear_74_52)'
            />
            <g filter='url(#filter1_d_74_52)'>
              <g clip-path='url(#clip1_74_52)'>
                <rect
                  width='259'
                  height='213'
                  transform='matrix(0.991445 -0.130526 0.707107 0.707107 20 9.70874)'
                  fill='url(#paint1_linear_74_52)'
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id='filter0_d_74_52'
            x='0'
            y='0'
            width='298.323'
            height='160.138'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood
              flood-opacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='25' />
            <feGaussianBlur stdDeviation='10' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 1 0 0 0 0 0.995833 0 0 0 0 0.995833 0 0 0 0.5 0'
            />
            <feBlend
              in2='BackgroundImageFix'
              result='effect1_dropShadow_74_52'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_74_52'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_d_74_52'
            x='0'
            y='-12'
            width='298.323'
            height='160.138'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood
              flood-opacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='25' />
            <feGaussianBlur stdDeviation='10' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 1 0 0 0 0 0.995833 0 0 0 0 0.995833 0 0 0 0.5 0'
            />
            <feBlend
              in2='BackgroundImageFix'
              result='effect1_dropShadow_74_52'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_74_52'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_74_52'
            x1='129.5'
            y1='0'
            x2='129.5'
            y2='213'
            gradientUnits='userSpaceOnUse'
          >
            <stop
              offset='0.161458'
              stop-color='#4231AA'
            />
            <stop
              offset='0.6875'
              stop-color='#2400FF'
              stop-opacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint1_linear_74_52'
            x1='129.5'
            y1='0'
            x2='129.5'
            y2='213'
            gradientUnits='userSpaceOnUse'
          >
            <stop
              offset='0.161458'
              stop-color='#4231AA'
            />
            <stop
              offset='0.6875'
              stop-color='#2400FF'
              stop-opacity='0'
            />
          </linearGradient>
          <clipPath id='clip0_74_52'>
            <rect
              width='166.317'
              height='132.128'
              rx='20'
              transform='matrix(0.991445 -0.130526 0.707107 0.707107 20 21.7087)'
              fill='white'
            />
          </clipPath>
          <clipPath id='clip1_74_52'>
            <rect
              width='166.317'
              height='132.128'
              rx='20'
              transform='matrix(0.991445 -0.130526 0.707107 0.707107 20 9.70874)'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );

  const XR = (
    <>
      <svg
        width='125'
        height='150'
        viewBox='0 0 125 150'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_74_33)'>
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M27.921 142.378C25.7597 136.858 0.746177 72.4539 0.746177 72.4539C0.746177 72.4539 -5.09392 57.5956 15.8946 47.0384C36.8827 36.4813 62.4338 23.187 62.4338 23.187V124.114C62.4338 124.114 47.3085 140.18 41.326 146.621C35.8899 152.474 30.0908 147.922 27.921 142.378Z'
            fill='url(#paint0_linear_74_33)'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M96.9471 142.378C99.1085 136.858 124.122 72.4539 124.122 72.4539C124.122 72.4539 129.962 57.5956 108.974 47.0384C87.9854 36.4813 62.4344 23.187 62.4344 23.187V124.114C62.4344 124.114 77.5597 140.18 83.5422 146.621C88.9782 152.474 94.7774 147.922 96.9471 142.378Z'
            fill='url(#paint1_linear_74_33)'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M62.4343 23.1871L19.0573 0.645614C19.0573 0.645614 9.81611 -3.71701 12.1314 10.2346L18.0583 45.9488L62.4343 23.1871Z'
            fill='url(#paint2_linear_74_33)'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M62.4338 23.1871L105.811 0.645614C105.811 0.645614 115.052 -3.71701 112.737 10.2346L106.81 45.9488L62.4338 23.1871Z'
            fill='url(#paint3_linear_74_33)'
          />
        </g>
        <defs>
          <linearGradient
            id='paint0_linear_74_33'
            x1='62.4479'
            y1='-7.71671'
            x2='26.7944'
            y2='175.975'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FF0000' />
            <stop
              offset='1'
              stop-color='#990000'
            />
          </linearGradient>
          <linearGradient
            id='paint1_linear_74_33'
            x1='88.9306'
            y1='149.224'
            x2='7.98058'
            y2='4.44204'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#FF0000' />
            <stop
              offset='1'
              stop-color='#990000'
            />
          </linearGradient>
          <linearGradient
            id='paint2_linear_74_33'
            x1='11.74'
            y1='-9.76015'
            x2='108.414'
            y2='145.38'
            gradientUnits='userSpaceOnUse'
          >
            <stop
              stop-color='#990000'
              stop-opacity='0.65'
            />
            <stop
              offset='1'
              stop-color='#FE0000'
              stop-opacity='0.65'
            />
          </linearGradient>
          <linearGradient
            id='paint3_linear_74_33'
            x1='62.4479'
            y1='-7.71662'
            x2='26.7944'
            y2='175.975'
            gradientUnits='userSpaceOnUse'
          >
            <stop
              stop-color='#FF0000'
              stop-opacity='0.65'
            />
            <stop
              offset='1'
              stop-color='#990000'
              stop-opacity='0.65'
            />
          </linearGradient>
          <clipPath id='clip0_74_33'>
            <rect
              width='125'
              height='150'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        width='276'
        height='152'
        viewBox='0 0 276 152'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d_171_21)'>
          <g clip-path='url(#clip0_171_21)'>
            <rect
              width='259'
              height='213'
              transform='matrix(0.991152 -0.132735 0.701043 0.713119 20 20.1743)'
              fill='url(#paint0_linear_171_21)'
            />
          </g>
        </g>
        <g filter='url(#filter1_d_171_21)'>
          <g clip-path='url(#clip1_171_21)'>
            <rect
              width='259'
              height='213'
              transform='matrix(0.991152 -0.132735 0.701043 0.713119 20 20.1743)'
              fill='url(#paint1_linear_171_21)'
            />
          </g>
        </g>
        <defs>
          <filter
            id='filter0_d_171_21'
            x='0'
            y='0'
            width='276'
            height='152'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood
              flood-opacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='25' />
            <feGaussianBlur stdDeviation='10' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 1 0 0 0 0 0.995833 0 0 0 0 0.995833 0 0 0 0.5 0'
            />
            <feBlend
              in2='BackgroundImageFix'
              result='effect1_dropShadow_171_21'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_171_21'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_d_171_21'
            x='0'
            y='0'
            width='276'
            height='152'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood
              flood-opacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='25' />
            <feGaussianBlur stdDeviation='10' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 1 0 0 0 0 0.995833 0 0 0 0 0.995833 0 0 0 0.5 0'
            />
            <feBlend
              in2='BackgroundImageFix'
              result='effect1_dropShadow_171_21'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_171_21'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_171_21'
            x1='129.5'
            y1='0'
            x2='129.5'
            y2='213'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#EC0505' />
            <stop
              offset='1'
              stop-color='#EC6767'
              stop-opacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint1_linear_171_21'
            x1='129.5'
            y1='0'
            x2='129.5'
            y2='213'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#EC0505' />
            <stop
              offset='1'
              stop-color='#EC6767'
              stop-opacity='0'
            />
          </linearGradient>
          <clipPath id='clip0_171_21'>
            <rect
              width='151.99'
              height='121.755'
              rx='20'
              transform='matrix(0.991152 -0.132735 0.701043 0.713119 20 20.1743)'
              fill='white'
            />
          </clipPath>
          <clipPath id='clip1_171_21'>
            <rect
              width='151.99'
              height='121.755'
              rx='20'
              transform='matrix(0.991152 -0.132735 0.701043 0.713119 20 20.1743)'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );

  const AI = (
    <>
      <svg
        width='145'
        height='159'
        viewBox='0 0 145 159'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clip-path='url(#clip0_74_75)'>
          <path
            d='M62.8327 85.5942L82.4077 73.14L101.74 85.5942L82.4077 97.785L62.8327 85.86V85.5942ZM4.10767 48.7608L82.4077 0L140.65 36.3042L121.318 73.14L82.4099 48.7608L23.6849 85.3308L4.10767 48.7608Z'
            fill='#F6BD3A'
          />
          <path
            d='M62.8326 134.355V109.976L82.1652 97.785L101.74 85.5942V109.973L82.4076 122.164V146.543L62.8326 159V134.355ZM62.8326 85.5942L43.2576 73.4033L23.6826 85.3283V60.9492L82.4076 24.3792V73.14L62.8326 85.5942ZM121.075 60.9492V48.7583L140.65 36.3042L140.892 60.6833L121.317 73.1375L121.075 60.9492Z'
            fill='#EB8C23'
          />
          <path
            d='M43.2577 146.014V73.4058L62.5902 61.4808L62.8327 85.5966L82.4077 97.5216V122.167L62.8327 110.771V159L43.2577 146.014ZM13.7751 78.9708L4.10767 72.6108V48.7608L23.6827 60.9516V85.3308L13.7751 78.9708ZM82.4077 48.7608V24.3792L121.075 48.7583L121.318 73.1375L82.4099 48.7583L82.4077 48.7608Z'
            fill='#E35A2B'
          />
        </g>
        <defs>
          <clipPath id='clip0_74_75'>
            <rect
              width='145'
              height='159'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
      <svg
        width='293'
        height='162'
        viewBox='0 0 293 162'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g filter='url(#filter0_d_171_30)'>
          <g clip-path='url(#clip0_171_30)'>
            <rect
              width='260.731'
              height='251.699'
              transform='matrix(0.990799 -0.13534 0.693956 0.720017 20 22.0598)'
              fill='url(#paint0_linear_171_30)'
            />
            <g filter='url(#filter1_d_171_30)'>
              <g clip-path='url(#clip1_171_30)'>
                <rect
                  width='260.731'
                  height='251.699'
                  transform='matrix(0.990799 -0.13534 0.693956 0.720017 20 9.05981)'
                  fill='url(#paint1_linear_171_30)'
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id='filter0_d_171_30'
            x='0'
            y='0'
            width='293'
            height='162'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood
              flood-opacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='25' />
            <feGaussianBlur stdDeviation='10' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 1 0 0 0 0 0.995833 0 0 0 0 0.995833 0 0 0 0.5 0'
            />
            <feBlend
              in2='BackgroundImageFix'
              result='effect1_dropShadow_171_30'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_171_30'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_d_171_30'
            x='0'
            y='-13'
            width='293'
            height='162'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood
              flood-opacity='0'
              result='BackgroundImageFix'
            />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='25' />
            <feGaussianBlur stdDeviation='10' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 1 0 0 0 0 0.995833 0 0 0 0 0.995833 0 0 0 0.5 0'
            />
            <feBlend
              in2='BackgroundImageFix'
              result='effect1_dropShadow_171_30'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_171_30'
              result='shape'
            />
          </filter>
          <linearGradient
            id='paint0_linear_171_30'
            x1='130.366'
            y1='0'
            x2='130.366'
            y2='251.699'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#F58319' />
            <stop
              offset='1'
              stop-color='white'
              stop-opacity='0'
            />
          </linearGradient>
          <linearGradient
            id='paint1_linear_171_30'
            x1='130.366'
            y1='0'
            x2='130.366'
            y2='251.699'
            gradientUnits='userSpaceOnUse'
          >
            <stop stop-color='#F58319' />
            <stop
              offset='1'
              stop-color='white'
              stop-opacity='0'
            />
          </linearGradient>
          <clipPath id='clip0_171_30'>
            <rect
              width='162.996'
              height='131.858'
              rx='20'
              transform='matrix(0.990799 -0.13534 0.693956 0.720017 20 22.0598)'
              fill='white'
            />
          </clipPath>
          <clipPath id='clip1_171_30'>
            <rect
              width='162.996'
              height='131.858'
              rx='20'
              transform='matrix(0.990799 -0.13534 0.693956 0.720017 20 9.05981)'
              fill='white'
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );

  return (
    <div class='container flex flex-col items-center justify-center'>
      {props.svg === 'AI'
        ? AI
        : props.svg === 'Eth'
        ? Eth
        : props.svg === 'XR'
        ? XR
        : null}
    </div>
  );
}
