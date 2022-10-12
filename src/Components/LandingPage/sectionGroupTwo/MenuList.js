import React, { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useSpring, animated } from 'react-spring';

const MenuList = ({ name, id }) => {
  const [expanded, setExpanded] = useState(false);
  const styles = useSpring({
    from: { x: 600 },
    config: { duration: 2000 },
    loop: {
      x: 0,
    },
  });

  return (
    <animated.div style={{ ...styles }}>
      <article className='question'>
        <header>
          <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
            {name}
          </h4>
          <button className='btnType' onClick={() => setExpanded(!expanded)}>
            {expanded ? (
              <MDBIcon fas icon='times-circle' size='2x' />
            ) : (
              <MDBIcon fas icon='plus-circle' size='2x' />
            )}
          </button>
        </header>
        {expanded && <p>{id}</p>}
      </article>
    </animated.div>
  );
};

export default MenuList;
