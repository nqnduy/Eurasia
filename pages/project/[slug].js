import MasterPageBasic from '@/website/master/MasterPageBasic';
import ProjectDetail from '@/website/pages/Project/ProjectDetail';
import { useRouter } from "next/router";
import React from "react";

export default function ProjectDetailPage() {
    const router = useRouter();
    return (
        <MasterPageBasic pageName={router.query.slug}>
            <ProjectDetail/>
        </MasterPageBasic>
    );
}
