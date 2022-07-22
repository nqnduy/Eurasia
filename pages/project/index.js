import MasterPageBasic from '@/website/master/MasterPageBasic'
import Project from '@/website/pages/Project';
import Banner from '@/website/section/global/Banner';
import React from "react";


export default function ProjectPage() {
    return (
			<MasterPageBasic pageName="Dự án">
				<Project languageCurrent="vi"/>
			</MasterPageBasic>
		);
}
