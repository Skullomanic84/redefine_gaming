import React, {useRef, useState} from 'react'
import Button from "./Button.jsx";
import {TiLocationArrow} from "react-icons/ti";

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const totalVideos = 3;
    const nextVideoRef = useRef();
    const handleVideoLoad = () => {
        setLoadedVideo((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVdClick = () => {
        setHasClicked(true);

        setCurrentIndex(upcomingVideoIndex);
    }

    const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

    return (
        <div className={"relative h-dvh w-screen overflow-x-hidden"}>
            <div id="video-frame" className={"relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"}>
                <div>
                    <div
                        className={"mask-clip-path absolute-center absolute z-50 overflow-hidden rounded-lg size-64 cursor-pointer"}>
                        <div onClick={handleMiniVdClick}
                             className={"origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"}>
                            <video
                                ref={nextVideoRef}
                                id="current-video"
                                src={getVideoSrc(upcomingVideoIndex)}
                                onLoadedData={handleVideoLoad}
                                className={"size-64 origin-center scale-150 object-cover object-center"}
                                loop
                                muted
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        onLoadedData={handleVideoLoad}
                        id="next-video"
                        className={"absolute-center invisible absolute z-20 siz-64 object-cover object-center"}
                        loop
                        muted
                    />

                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                        autoPlay
                        loop
                        muted
                        onLoadedData={handleVideoLoad}
                        className={"absolute left-0 top-0 size-full object-cover object-center"}
                    />
                </div>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    G<b>A</b>MING
                </h1>

                <div className={"absolute left-0 top-0 z-40 size-full"}>
                    <div className={"mt-24 px-5 sm:px10"}>
                        <h1 className={"special-font hero-heading text-blue-100"}>
                            redefi<b>n</b>e
                        </h1>

                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                            Enter the Metagame Layer <br/> Unleash the Play Economy
                        </p>
                        <Button
                            id="watch-trailer"
                            title="watch trailer"
                            leftIcon={<TiLocationArrow/>}
                            containerClass="!bg-yellow-300 flex-center gap-1"
                        />
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                G<b>A</b>MING
            </h1>
        </div>
    )
}
export default Hero
