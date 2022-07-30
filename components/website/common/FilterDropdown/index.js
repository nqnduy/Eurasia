import { ArrowDownIcon } from '@/website/elements/Icons';
import React, { useState, useEffect, useMemo } from "react";
import Option from '@/website/common/FilterDropdown/Option';
import { variable } from 'styles/variable';

export default function FilterDropdown({ children, options, onClickFilter, onClickShowAll }) {
	const [option, setOption] = useState(children);
	const [isShow, setIsShow] = useState(true);

    const handleOpen = (ev) => {
		if (ev.target.value !== option) {
			setOption(ev.target.value);
		} else return;
        setIsShow(!isShow);
        if (onClickFilter) {
            onClickFilter(option);
        }
    };

    const handleShowAll = () => {
        setOption(children);
        setIsShow(!isShow);
        if (onClickShowAll) {
            onClickShowAll();
        }
    }
	return (
		<>
			<div className={`FilterDropDown ${!isShow ? "show" : ""}`}>
				<div className="typeSort" onClick={() => setIsShow(!isShow)}>
					<input value={option} readOnly />
					<div className="arrow">
						<ArrowDownIcon style={{ fontSize: 10 }} />
					</div>
				</div>
				<div className="optionList">
					<Option onClick={handleShowAll}>Tất cả</Option>
					{options?.map((option, index) => (
						<Option key={index} value={option} onClick={handleOpen}>
							{option}
						</Option>
					))}
				</div>
			</div>
			<style jsx global>{`
				.FilterDropDown {
					display: flex;
					flex-direction: column;

					position: relative;
					margin-right: 45px;
					cursor: pointer;
					&.show {
						.optionList {
							display: block;
							animation: dropDown ease 0.2s;
							transform-origin: top;
						}
					}
					&:last-child {
						margin-right: 0;
					}
				}
				.typeSort {
					display: flex;
					color: ${variable.color.dark_grey};
					cursor: pointer;
					align-items: center;
					input {
						font-family: "CoGa-B";
						font-size: 1.6rem;
						letter-spacing: 0.2em;
						cursor: pointer;
						outline: none;
						border: none;
						background-color: transparent;
						width: fit-content;
					}
				}
				.optionList {
					@keyframes dropDown {
						from {
							opacity: 0;
							transform: scaleY(0);
						}
						to {
							opacity: 1;
							transform: scaleY(1);
						}
					}
					display: none;
					animation: dropDown ease 0.2s;
					transform-origin: top;
					position: absolute;
					z-index: 100;
					top: 4rem;
					right: 0;
					width: 100%;
					overflow-y: scroll;
					background-color: #fff;
					max-height: 10em;
					border-bottom-left-radius: 5px;
					border-bottom-right-radius: 5px;
					&::-webkit-scrollbar {
						width: 3px;
					}
					&::-webkit-scrollbar-track {
						background: #ddd;
					}
					&::-webkit-scrollbar-thumb {
						background: ${variable.color.gold};
					}

					//Firefox scrollbar opt
					scrollbar-width: thin;
					scrollbar-color: #e71882 #ddd;
				}
			`}</style>
		</>
	);
}
