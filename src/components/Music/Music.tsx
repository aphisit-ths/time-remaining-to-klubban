interface MusicProps {}

const Music: React.FC<MusicProps> = () => {
  return (
    <div>
      <iframe
        title="music"
        width="100%"
        height="150"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1634267650&color=%23a87a8f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </div>
  );
};

export default Music;
