import { useEffect, useRef } from 'react';

type BackdropProps = {
  showBackdrop: boolean;
  onClick: () => void;
};

export const Backdrop = ({ showBackdrop, onClick }: BackdropProps) => {
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    backdrop.current?.classList.add('!size-0');
  }, []);

  return (
    <div
      className={`
            absolute left-0 top-full h-screen w-screen [transition:backdrop-filter_300ms]
            ${showBackdrop ? 'backdrop-blur-[3px] backdrop-brightness-75' : 'backdrop-blur-none '}
        `}
      onClick={onClick}
      onTransitionEnd={() => {
        if (!showBackdrop) {
          backdrop.current?.classList.toggle('!size-0');
        }
      }}
      ref={backdrop}
    />
  );
};
