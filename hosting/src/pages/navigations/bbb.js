import React from "react";
import BottomNav from 'components/BottomNav';

const Page = () => {

  const value = 1;

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <h1>navigations/bbb</h1>
      </main>

      <BottomNav current='/navigations/bbb' />
    </React.Fragment>
  );
};

export default Page;
