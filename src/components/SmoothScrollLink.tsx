"use client";

import { useCallback } from "react";

type SmoothScrollLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  offsetPx?: number;
  durationMs?: number;
  onClick?: () => void;
};

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default function SmoothScrollLink({
  href,
  className,
  children,
  offsetPx = 88,
  durationMs = 650,
  onClick: onClickProp,
}: SmoothScrollLinkProps) {
  const onClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) return;
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      onClickProp?.();

      const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offsetPx);

      if (reduceMotion) {
        window.scrollTo({ top });
        return;
      }

      const startY = window.scrollY;
      const delta = top - startY;
      const start = performance.now();

      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / durationMs);
        const y = startY + delta * easeInOutCubic(p);
        window.scrollTo(0, y);
        if (p < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    },
    [durationMs, href, offsetPx, onClickProp],
  );

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
