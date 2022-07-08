import MasterPageBasic from '@/website/master/MasterPageBasic';
import Inspiration from '@/website/pages/Inspiration';
import React from 'react'

export default function InspirationPage() {
    return (
        <MasterPageBasic pageName="Inspiration" themeHeader="light">
            <Inspiration/>
        </MasterPageBasic>
    );
}
