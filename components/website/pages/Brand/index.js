import GridLayout from "@/website/elements/GridLayout";
import Banner from "@/website/section/global/Banner";
import Introduction from "@/website/section/global/Introduction";
import BrandSlide from "@/website/section/pages/brand/BrandSlide";
import React from "react";

export default function Brand() {
	return (
		<>
			<div className="Brand">
				<Banner image="/images/banner-4.jpg" headline="Furniture" title="Fendi Casa" />
				<GridLayout>
                    <div className="Brand__intro">
                        <Introduction
                            title="Brands"
                            description="Eurasia Concept excels at providing bespoke solution and world-renowned interior for a range of projects: from hotels, restaurants, to private houses & apartments."
                        />
                    </div>
                    <div className="Brand__slide">
                        <BrandSlide/>
                    </div>
				</GridLayout>
			</div>
            <style jsx global>{`
                .Brand {
                    margin-bottom: 5rem;
                    &__intro {
                        grid-column: 3 / 14;
                    }
                    &__slide {
                        grid-column: 2 / 16;
                    }
                }
            `}</style>
		</>
	);
}
