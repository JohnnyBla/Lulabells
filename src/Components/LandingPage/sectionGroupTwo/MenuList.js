import React, { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import { useSpring, animated } from 'react-spring';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/cartReducer';

const MenuList = ({ name, id }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const styles = useSpring({
    from: { x: 600 },
    config: { duration: 1500 },
    loop: {
      x: 0,
    },
  });

  const HandleClick = () => {
    dispatch(addItem(id));
  };

  return (
    <animated.div style={{ ...styles }}>
      <article className='question'>
        <header>
          <h4 onClick={HandleClick} className='question-title'>
            {name}
          </h4>
          <button className='btnType' onClick={HandleClick}>
            {expanded ? (
              <MDBIcon fas icon='times-circle' size='2x' />
            ) : (
              <MDBIcon fas icon='plus-circle' size='2x' />
            )}
          </button>
        </header>
      </article>
    </animated.div>
  );
};

export default MenuList;
