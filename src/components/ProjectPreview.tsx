import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Item = {
  id: string;
  title: string;
  meta: string;
  image: string;
  href: string;
};

/**
 * Katalog interaktif ringan: hover/focus pada baris project menampilkan
 * preview gambar asli dengan spring halus. Touch & reduced-motion memakai
 * state statis (tanpa gerak), sesuai PRD §10.5.
 */
export default function ProjectPreview({ items, base }: { items: Item[]; base: string }) {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className="pp-index" role="list">
      {items.map((item, i) => (
        <a
          key={item.id}
          role="listitem"
          className="pp-index__row"
          href={item.href}
          onMouseEnter={() => setActive(item.id)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(item.id)}
          onBlur={() => setActive(null)}
        >
          <span className="pp-index__num">{String(i + 1).padStart(2, '0')}</span>
          <span className="pp-index__title">{item.title}</span>
          <span className="pp-index__meta">{item.meta}</span>
          <span className="pp-index__arrow" aria-hidden="true">↗</span>

          {active === item.id && (
            <motion.span
              className="pp-index__preview"
              aria-hidden="true"
              initial={reduce ? false : { opacity: 0, y: 8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 320, damping: 30 }}
            >
              <img
                src={`${base}/screenshots/${item.image}`}
                alt=""
                width="1440"
                height="900"
                loading="lazy"
              />
            </motion.span>
          )}
        </a>
      ))}
    </div>
  );
}
