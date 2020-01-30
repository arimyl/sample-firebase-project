import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Paper from '@material-ui/core/Paper';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link, navigate } from "gatsby";
import { css } from '@emotion/core';

const Page = ({current}) => {
  console.log(current);
  return (
    <BottomNavigation
      component={Paper}
      elevation={4}
      value={current}
      showLabels
      onChange={(event, newValue) => setTimeout(() => navigate(newValue), 300)}
      css={css`
        position: fixed;
        bottom: 0;
        width: 100%;
      `}
    >
    <BottomNavigationAction value='/navigations' label="Recents" icon={<RestoreIcon />} />
    <BottomNavigationAction value='/navigations/aaa' label="Favorites" icon={<FavoriteIcon />} />
    <BottomNavigationAction value='/navigations/bbb' label="Nearby" icon={<LocationOnIcon />} />
  </BottomNavigation>
  );
};

export default Page;
