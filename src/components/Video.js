import React from 'react';

function VideoSection() {
  return (
    <section className="video py-5">
      <div className="video-content">
        <span className=" d-block">CREATE YOUR OWN EXPERIENCE</span>
        <h1 className=" header-with-line4 pt-3">Watch Our Awesome Video</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but <br />
          the majority have suffered alteration in some form.
        </p>
        <a id="play-video" class="video-play-button" href="https://www.youtube.com/embed/hXAdt5w3sPQ"  data-toggle="modal" data-target="#savoybeachhotel">
	<span></span>
 </a>
      </div>
    </section>
  );
}

export default VideoSection;
