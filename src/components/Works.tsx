import Image from "next/image";
import { Tile, TileBackground, TileContent, TileWrapper } from "./Tile";
import {
  WorkContainer,
  WorkBackground,
  WorkLeft,
  WorkRight,
  WorkLink,
} from "./Work";
import { type FC } from "react";

const Works: FC = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We Built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink to="https://pinkpanda.io">Pink Panda</WorkLink>&apos;s
                app
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/pinkpanda.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Pink Panda"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We made</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink to="/">Pink Panda</WorkLink>
              </div>
              <div>Steakwallet&nbsp;faster</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/steakwallet.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Steakwallet"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We helped</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink to="/">Pink Panda</WorkLink>
              </div>
              <div>Showtime ship faster.</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/assets/works/Showtime.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="showtime"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
