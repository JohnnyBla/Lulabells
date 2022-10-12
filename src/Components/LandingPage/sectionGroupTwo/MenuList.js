import React, { useState } from 'react';

import { MDBIcon } from 'mdb-react-ui-kit';

const MenuList = ({ name, id }) => {
  const [expanded, setExpanded] = useState(false);

  return (
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
  );
};

export default MenuList;
