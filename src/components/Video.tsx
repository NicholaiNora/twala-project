const Video = () => {
  return (
    <section>
      <div className="max-w-[1140px] mx-auto">
        <div className="bg-gradient-to-r from-[#7a13ce] to-[#09dbce] w-full h-[1px]"></div>
        <div className="max-w-[940px] mx-auto">
          <div className="pt-[56.17021276595745%] w-full px-0 pb-0 relative bg-[url('../../src/assets/youtube-placeholder.svg')] bg-[50%] bg-cover">
            <iframe
              src="https://www.youtube.com/embed/Sijrszg1dGA?rel=0&controls=1&autoplay=0&mute=0&start=0"
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "100%",
                pointerEvents: "auto",
              }}
              allow="autoplay; encrypted-media"
              title="Business Outlook with Twala Co-founder and General Counsel Atty. Third Bagro | ANC"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
