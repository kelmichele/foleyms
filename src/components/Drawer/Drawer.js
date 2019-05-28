import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBIcon from '@material-ui/icons/MoreHoriz';
import NavigationItems from "../../components/NavigationItems/NavigationItems";
import classes from "../../components/Header/Header.scss";
// import { Link } from "react-router-dom";


// const useStyles = makeStyles({
//   list: {
//     width: 300,
//   },
//   fullList: {
//     width: 'auto',
//   },
// });

function TemporaryDrawer() {
  // const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
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
      {/* <List> */}
      <ul className={classes.mobileSideNav}>
        <NavigationItems />
      </ul>
      {/* </List> */}
    </div>
  );

  const fullList = side => (
    <div
      className={[classes.fullList, classes.FullNavList].join(' ')}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <ul className={classes.mobileSideNav}>
        <NavigationItems />
      </ul>
    </div>
  );

  return (
    <div className={classes.mNavDrawer}>
      <Button onClick={toggleDrawer('right', true)}><MenuIcon /></Button>
      <Button onClick={toggleDrawer('top', true)}><MenuBIcon /></Button>

      <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
        {fullList('top')}
      </Drawer>
      
      <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)} className={classes.cNavDrawer}>
        {sideList('right')}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;