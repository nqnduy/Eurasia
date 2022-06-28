import React from 'react'
import PropTypes from "prop-types";
import Banner from '@/website/section/Banner';
import AllInspirations from '@/website/pages/HomePage/AllInspirations';

HomePage.propTypes = {};

export default function HomePage() {
   return (
      <>
         <Banner/>
         <AllInspirations/>
      </>
   )
}
