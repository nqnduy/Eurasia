import Banner from '@/website/section/global/Banner';
import React from 'react'
import ProjectDetailArticle from '@/website/section/pages/project-detail/ProjectDetailArticle';

export default function ProjectDetail() {
    return (
			<>
				<div className="ProjectDetail">
                <Banner image="/images/banner-5.jpg" />
                <ProjectDetailArticle/>
				</div>
				<style jsx>{``}</style>
			</>
		);
}
