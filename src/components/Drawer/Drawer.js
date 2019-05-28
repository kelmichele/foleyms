import React from 'react';
import classes from "../../components/Header/Header.scss";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
// import MenuBIcon from '@material-ui/icons/MoreHoriz';
import ClearIcon from '@material-ui/icons/Clear';
import NavigationItems from "../../components/NavigationItems/NavigationItems";

function TemporaryDrawer() {
  const [state, setState] = React.useState({
    // top: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={[classes.list, classes.SideNavList].join(' ')}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <div className={classes.closeIcon}><ClearIcon /></div>
      <ul className={classes.mobileSideNav}>
        <NavigationItems />
      </ul>
    </div>
  );

  return (
    <div className={classes.mNavDrawer}>
      <Button onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
     
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} className={classes.cNavDrawer}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;