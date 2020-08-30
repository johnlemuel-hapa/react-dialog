import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

const Title = () => (
  <div className="title">
    This is Important
  </div>
);

const Body = () => (
  <div className="body">
    Here is some important text or error or something.
  </div>
);

const Footer = () => (
  <div className="footer">
    <input type="button" value="Close" />
  </div>
);

function Dialog({ children }) {
  let items = React.Children.toArray(children);

  for (let i = items.length - 1; i >= 1; i--) {
    items.splice(i, 0,
      <span key={ i }>
        <hr />
      </span>
    );
  }

  return(
    <div className="dialog">
      { items }
    </div>
  );
};

Dialog.propTypes = {
  children: PropTypes.node
};

ReactDOM.render(
  <Dialog>
    <Title />
    <Body />
    <Footer />
  </Dialog>,
  document.getElementById('root')
);
