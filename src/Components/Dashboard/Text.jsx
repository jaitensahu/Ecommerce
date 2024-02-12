import React from 'react';
import { useSpring, animated } from 'react-spring';

const FadeInUpText = ({ text, text2 }) => {
    console.log("fadeInUpText");
  const fadeInUp = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  const fadeInLeft = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-150px)' },
  });

  return <>
  <animated.div className="text-3xl" style={fadeInLeft}>{text2}</animated.div>
  <animated.div  className="text-2xl pt-2" style={fadeInUp}>{text}</animated.div>
  </>
};

export default FadeInUpText;