import { useEffect, useRef } from 'react';

type BackdropProps = {
  isNavbarOpen: boolean;
  onClick: () => void;
};

export const Backdrop = ({ isNavbarOpen, onClick }: BackdropProps) => {
  const backdrop = useRef<HTMLDivElement>(null);

  useEffect(() => {
    backdrop.current?.classList.add('!size-0');
  }, []);

  return (
    <div
      className={`
            absolute left-0 top-full h-screen w-screen [transition:backdrop-filter_300ms]
            ${isNavbarOpen ? 'backdrop-blur-[3px] backdrop-brightness-75' : 'backdrop-blur-none '}
        `}
      onClick={onClick}
      onTransitionEnd={() => {
        if (!isNavbarOpen) {
          backdrop.current?.classList.toggle('!size-0');
        }
      }}
      ref={backdrop}
    />
  );
};
