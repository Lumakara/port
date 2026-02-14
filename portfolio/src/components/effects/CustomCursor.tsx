import { useEffect, useRef, useState } from 'react';
import { useMouse } from '../../hooks/useMouse';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const CustomCursor = () => {
  const { x, y } = useMouse();
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const isMobile = useMediaQuery('(pointer: coarse)');
  const posRef = useRef({ x: 0, y: 0 });
  const dotPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    const animate = () => {
      // Smooth follow for cursor
      posRef.current.x += (x - posRef.current.x) * 0.15;
      posRef.current.y += (y - posRef.current.y) * 0.15;
      
      // Faster follow for dot
      dotPosRef.current.x += (x - dotPosRef.current.x) * 0.5;
      dotPosRef.current.y += (y - dotPosRef.current.y) * 0.5;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x - 10}px, ${posRef.current.y - 10}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPosRef.current.x - 3}px, ${dotPosRef.current.y - 3}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafRef.current);
    };
  }, [x, y, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-5 h-5 border-2 border-aqua rounded-full pointer-events-none z-[9999] transition-all duration-150 mix-blend-difference ${
          isHovering ? 'scale-250 bg-aqua/20' : ''
        } ${isClicking ? 'scale-75' : ''}`}
        style={{ willChange: 'transform' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-aqua rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
