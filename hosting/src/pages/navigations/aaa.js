import React from "react";
import page from 'common/page';
import { withTheme } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Paper from '@material-ui/core/Paper';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from "gatsby";
import { css } from '@emotion/core';
import BottomNav from 'components/BottomNav';

const Page = () => {

  const value = 1;

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <h1>navigations/aaa</h1>
      </main>
      <BottomNav current='/navigations/aaa' />
    </React.Fragment>
  );
};

export default Page;
