import React, { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { ReactExpandableListView } from 'react-expandable-listview';

import './Acardion.css';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef(null);

  const duration = 1000;

  const defaultStyle = {
    transition: `height ${duration}ms ease-in-out`,
    opacity: 0,
    // visibility: 'visible',
    display: 'block',
  };

  const transitionStyles = {
    entering: { display: 'block', opacity: 1 },
    entered: { display: 'block', opacity: 1 },
    exiting: { display: 'none', opacity: 0 },
    exited: { display: 'none', opacity: 0 },
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <div>{title}</div>
        <div>{isOpen ? '-' : '+'}</div>
      </div>

      <Transition nodeRef={accordionRef} in={isOpen} timeout={duration}>
        {(state) => (
          <div
            ref={accordionRef}
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            className="accordion-content"
          >
            {content}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Accordion;
