import React from 'react'
import MasterPageBasic from '@/website/master/MasterPageBasic';
import Brand from '@/website/pages/Brand';

export default function BrandPage() {
    return (
			<MasterPageBasic pageName="Brands" themeHeader="light">
				<Brand />
			</MasterPageBasic>
		);
}
