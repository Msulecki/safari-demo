import { useEffect, useRef, useState } from 'react';

const AsyncAudioPlayback = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean | undefined>();

  const onAsyncPlay = () => {
    setIsPlaying((prev) => !Boolean(prev));
  };

  const onSyncPlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  useEffect(() => {
    if (typeof isPlaying === 'undefined') {
      return;
    }

    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <button onClick={onAsyncPlay}>Play async</button>
      <button onClick={onSyncPlay}>Play sync</button>
      <audio ref={audioRef} src='/audio.mp3' crossOrigin='anonymous'></audio>
    </div>
  );
};

export default AsyncAudioPlayback;
