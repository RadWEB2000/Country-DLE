'use client';
import { MdPause, MdPlayArrow } from "react-icons/md";

import { useRef, useState } from "react";

export default function AudioPlayer({ anthem }: { anthem: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const time = (parseFloat(e.target.value) / 100) * audio.duration;
      audio.currentTime = time;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  // <- reaguj na zmianę źródła

  return (
    <div className="w-full max-w-md ml-0 mr-auto p-2 bg-slate-500/0 text-slate-950 rounded-2xl my-4 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="text-white h-[50px] w-[50px] cursor-pointer flex items-center justify-center text-2xl duration-200 linear bg-slate-500 hover:bg-slate-600 rounded-full"
        >
          {isPlaying ? <MdPause /> : <MdPlayArrow />}
        </button>
        <div className="flex-1">
          <input
            type="range"
            value={progress}
            onChange={handleSeek}
            className="w-full h-3 accent-slate-100 bg-amber-700"
          />
          <div className="text-slate-800 text-sm flex justify-end">
            <span>{formatTime(currentTime)}</span>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        preload="metadata"
        src={anthem}
      />
    </div>
  );
}