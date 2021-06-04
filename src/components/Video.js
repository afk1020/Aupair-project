import React from 'react';
import ReactPlayer from 'react-player/youtube';
import '../App.css';

function Video() {
	return (
		<div style={{display: "flex", justifyContent: "center", marginTop: "100px"}}>
			<ReactPlayer  url='https://www.youtube.com/watch?v=IVAnxp9Iqi0' />

		</div>
	)
}

export default Video
