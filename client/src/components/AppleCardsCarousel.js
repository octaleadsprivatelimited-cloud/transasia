import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const CarouselWrap = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px 0 10px;
  cursor: grab;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(520px, 1fr);
  gap: 28px;

  @media (max-width: 768px) {
    grid-auto-columns: 90%;
  }
`;

const Card = styled(motion.div)`
  height: 560px;
  border-radius: 28px;
  background: #ffffff;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(10, 132, 255, 0.08);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    height: 420px;
  }
`;

const CardImage = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: saturate(1.05);
`;

const CardOverlay = styled.div`
  position: relative;
  z-index: 1;
  padding: 32px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,1) 100%);

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Header3 = styled.h3`
  margin: 0 0 16px 0;
  font-weight: 800;
  color: #0b0b0b;
  line-height: 1.3;
  font-size: clamp(18px, 2.8vw, 28px);
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 28px;
  color: #0b0b0b;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.div`
  margin-top: 10px;
  color: #1f2937;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default function AppleCardsCarousel({ items = [] }) {
  const x = useMotionValue(0);
  const bgX = useTransform(x, [0, -300, -600], [0, 30, 60]);
  const containerRef = useRef(null);
  const rowRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current && rowRef.current) {
        const cWidth = containerRef.current.offsetWidth;
        const rWidth = rowRef.current.scrollWidth;
        setContainerWidth(cWidth);
        setMaxScroll(Math.max(0, rWidth - cWidth));
      }
    };
    measure();
    window.addEventListener('resize', measure);
    const timer = setTimeout(measure, 100);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timer);
    };
  }, [items]);

  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  const handleWheel = (e) => {
    const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    const current = x.get();
    const next = clamp(current - delta, -maxScroll, 0);
    
    // Only prevent default if we're actually scrolling the carousel
    if (Math.abs(delta) > 0 && ((current > -maxScroll && delta > 0) || (current < 0 && delta < 0))) {
      e.preventDefault();
      x.set(next);
    }
  };

  const handleDragStart = () => {
    document.body.style.userSelect = 'none';
  };

  const handleDragEnd = (event, info) => {
    document.body.style.userSelect = '';
    // Prevent navigation on drag
    const velocity = info.velocity.x;
    const current = x.get();
    const inertia = velocity * 0.2;
    const next = clamp(current + inertia, -maxScroll, 0);
    x.set(next);
  };

  return (
    <CarouselWrap onWheel={handleWheel}>
      <Container ref={containerRef}>
        <Row 
          ref={rowRef} 
          drag="x" 
          dragConstraints={{ left: -maxScroll, right: 0 }} 
          dragElastic={0.05}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ x }}
        >
          {items.map((item, idx) => (
            <Card
              key={idx}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
            >
              <CardImage
                style={{ backgroundImage: `url(${item.image})`, x: bgX }}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <CardOverlay>
                {idx === 0 && (
                  <Header3>
                    World Leaders in Cyber Risk Quantification providing a Robust Risk Management Framework Executive Dashboard - Justifying Cyber Spend.
                  </Header3>
                )}
                <Title>{item.title}</Title>
                {item.subtitle ? <Subtitle>{item.subtitle}</Subtitle> : null}
              </CardOverlay>
            </Card>
          ))}
        </Row>
      </Container>
    </CarouselWrap>
  );
}


