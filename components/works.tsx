import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import {
  TileBackground,
  TileContent,
  TilePage,
  TileWrapper,
} from './utils/tile';
import { WorkContainer, WorkLeft, WorkRight } from './utils/work';

const Works: React.FC = () => (
  <TileWrapper pages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <TilePage
        page={0}
        renderPage={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We&apos;re available at</div>
              <div className="text-4xl md:text-5xl h-24 tracking-tight">
                <div className="leading-tight items-center gap-9 flex max-w-5xl text-center mx-auto tracking-tight ">
                  <Link href="/adForm">
                    <a>
                      <button
                        className={`${styles.bgBtn} hover:underline hover:underline-offset-4 text-white outline-none font-bold rounded-2xl`}
                      >
                        Odisha
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="text-sm font-thin tracking-wider">
                  <p>
                    Click on city name to place your ad on Wewer&apos;s
                    Metaverse
                  </p>
                </div>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="border rounded-2xl overflow-hidden">
                {' '}
                <Image
                  src="/Odisha.jpg"
                  layout="responsive"
                  width={840}
                  height={1320}
                  alt="wok"
                ></Image>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>
    <TileBackground></TileBackground>
    <TileContent>
      <TilePage
        page={1}
        renderPage={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We&apos;re available at</div>
              <div className="text-4xl md:text-5xl h-24 tracking-tight">
                <div className="leading-tight items-center gap-9 flex max-w-5xl text-center mx-auto tracking-tight ">
                  <Link href="/adForm">
                    <a>
                      <button
                        className={`${styles.bgBtn} hover:underline hover:underline-offset-4 text-white outline-none font-bold rounded-2xl`}
                      >
                        Delhi
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="text-sm font-thin tracking-wider">
                  <p>
                    Click on city name to place your ad on Wewer&apos;s
                    Metaverse
                  </p>
                </div>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="border rounded-2xl overflow-hidden">
                <Image
                  src="/Delhi.jpg"
                  layout="responsive"
                  width={840}
                  height={1320}
                  alt="wok"
                ></Image>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>{' '}
    <TileBackground></TileBackground>
    <TileContent>
      <TilePage
        page={2}
        renderPage={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We&apos;re available at</div>
              <div className="text-4xl md:text-5xl h-24 tracking-tight">
                <div className="leading-tight items-center gap-9 flex max-w-5xl text-center mx-auto tracking-tight ">
                  <Link href="/adForm">
                    <a>
                      <button
                        className={`${styles.bgBtn} hover:underline hover:underline-offset-4 text-white outline-none font-bold rounded-2xl`}
                      >
                        Dubai
                      </button>
                    </a>
                  </Link>
                </div>
                <div className="text-sm font-thin tracking-wider">
                  <p>
                    Click on city name to place your ad on Wewer&apos;s
                    Metaverse
                  </p>
                </div>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <div className="border rounded-2xl overflow-hidden">
                <Image
                  src="/Dubai.jpg"
                  layout="responsive"
                  width={840}
                  height={1320}
                  alt="wok"
                ></Image>
              </div>
            </WorkRight>
          </WorkContainer>
        )}
      />
    </TileContent>{' '}
  </TileWrapper>
);

export default Works;
