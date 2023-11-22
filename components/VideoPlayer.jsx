import React from "react";

const VideoPlayer = ({ fileName }) => {
    const videoPath = `/img/${fileName}.mp4`;

    return (
        <div>
            <br />
            <video controls >
                <source src={videoPath} type="video/mp4" />
                Your browser does not support video tags.
            </video>
        </div>
    );
};

export default VideoPlayer;
