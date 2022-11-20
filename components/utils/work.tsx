export const WorkContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div className="grid grid-col-1 lg:grid-col-2 w-full min-h-screen">
    {children}
  </div>
);

interface WorkContentProps {
  progress: number;
  children: React.ReactNode;
}

export const WorkLeft: React.FC<WorkContentProps> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) {
    translateY = Math.max(-50 - (progress - 0.85) * 2 * 50);
  }
  return (
    <div
      className="flex flex-col lg:items-start pl-5 lg:pl-10 items-center justify-center text-3xl lg:text-3xl h-[30vh] lg:h-auto"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="leading-10">{children}</div>
    </div>
  );
};

export const WorkRight: React.FC<WorkContentProps> = ({
  children,
  progress,
}) => {
  let translateY = Math.max(-50 - (progress - 0.5) * 50);
  return (
    <div
      className="flex flex-1 items-center lg:pl-160 justify-center text-3xl lg:text-3xl h-screen lg:min-h-screen"
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <div className="w-full max-w-md pt-0 px-10 md:px-0">{children}</div>
    </div>
  );
};
