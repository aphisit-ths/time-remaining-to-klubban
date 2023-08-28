import "./music.scss";
import { motion } from "framer-motion";
interface MusicProps {}

const Music: React.FC<MusicProps> = () => {
  return (
    <motion.div
      animate={{
        scale: [0.8],
        translateY: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0.5, 0.5, 0.5, 1],
        repeat: Infinity,
        repeatDelay: 2.5,
      }}
      className="container"
    >
      <iframe
        className="content"
        title="music"
        width="100%"
        height="150"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1634267650&color=%23a87a8f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </motion.div>
  );
};

export default Music;
