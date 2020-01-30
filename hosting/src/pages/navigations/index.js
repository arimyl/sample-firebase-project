import React from "react";
import BottomNav from 'components/BottomNav';

const Page = () => {

  const value = 1;

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <h1>navigations</h1>
      </main>
      <BottomNav current='/navigations' />
    </React.Fragment>
  );
};

export default Page;
