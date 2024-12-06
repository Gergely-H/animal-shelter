type HamburgerButtonProps = {
  isNavbarOpen: boolean;
  onClick: () => void;
};

export const HamburgerButton = ({
  isNavbarOpen,
  onClick,
}: HamburgerButtonProps) => (
  <button
    className='grid size-20 place-content-center p-6'
    onClick={onClick}
    type='button'
  >
    <span
      className={`w-12 rounded-full bg-black duration-150
            before:absolute before:-ml-6 before:h-2 before:w-12 before:rounded-full
            before:bg-black before:transition-all before:duration-150 before:content-['']
            after:absolute after:-ml-6 after:h-2 after:w-12 after:rounded-full
            after:bg-black after:transition-all after:duration-150 after:content-['']
        ${
          isNavbarOpen
            ? 'h-0 bg-white before:-translate-y-1 before:rotate-45 after:-translate-y-1 after:-rotate-45'
            : 'h-2 before:-translate-y-4 after:translate-y-4'
        }`}
    />
  </button>
);
