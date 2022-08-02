import React from 'react'

export default function useScrollToPosition(position) {
    const goToTop = () => {
        window.scrollTo({
				top: position,
				behavior: "smooth",
			});
    }
    return goToTop;
}
