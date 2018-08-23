import React from 'react';
import styles from './Layout.css';
import Aux from '../../hoc/Aux';

const layout = (props) => (
  <Aux>
    <div className='Layout'>
      Toolbar | SideDrawer | Backdrop
    </div>
    <main>
      {props.children}
    </main>
  </Aux>
);

export default layout;
