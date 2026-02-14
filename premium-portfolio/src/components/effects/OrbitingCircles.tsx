import { cn } from '../../lib/utils';
import type { ReactNode } from 'react';

interface OrbitingCirclesProps {
  className?: string;
  children?: ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export const OrbitingCircles = ({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) => {
  const calculatedDuration = duration / speed;
  const childrenArray = children ? (Array.isArray(children) ? children : [children]) : [];

  return (
    <div className="relative flex items-center justify-center">
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 w-full h-full"
        >
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-white/10"
          />
        </svg>
      )}
      {childrenArray.map((child, index) => {
        const angle = (360 / childrenArray.length) * index;
        return (
          <div
            key={index}
            style={
              {
                '--duration': `${calculatedDuration}s`,
                '--radius': `${radius}px`,
                '--angle': angle,
                '--icon-size': `${iconSize}px`,
                animationDirection: reverse ? 'reverse' : 'normal',
              } as React.CSSProperties
            }
            className={cn(
              'absolute flex items-center justify-center rounded-full',
              'animate-orbit',
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default OrbitingCircles;
