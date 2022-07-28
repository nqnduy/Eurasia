import AppLink from '@/components/diginext/link/AppLink';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { variable } from 'styles/variable';
import ArrowNext from '@/website/common/ArrowNext';
import { changeQueryURL } from 'modules/utils';
import ArrowPrev from '@/website/common/ArrowPrev';

export default function Paginate({ totalPage }) {
	const router = useRouter();
	const { query } = router;
	const currentPage = parseInt(query.page || "1");

	const renderPage = () => {
		if (totalPage <= 1) return;

		let start = currentPage - 2;
		let end = currentPage + 2;
		if (start <= 1) {
			start = 1;
			end = 5;
		}
		if (end > totalPage) {
			end = totalPage;
			start = totalPage - 4;
			if (start < 1) start = 1;
		}
		let list = [];
		for (let i = start; i <= end; i++) {
			list.push(
				<React.Fragment key={i}>
					<Link href={changeQueryURL({ ...query, page: i })} passHref replace>
						<li className={`page-item none-select ${currentPage === i ? "active" : ""}`}>
							<a className="page-link">{i < 10 ? `0${i}` : i}</a>
						</li>
					</Link>
					<style jsx>{`
						.page {
							&-item {
								cursor: pointer;
								width: 4rem;
								aspect-ratio: 1;
								border: 0.1rem solid ${variable.color.grey};
								display: flex;
								justify-content: center;
								align-items: center;
								transition: 0.3 ease-in;
								margin: 0 0.5rem;
								a {
									font-family: "Lexend";
									font-size: 1.4rem;
									color: ${variable.color.violet};
									transition: 0.3 ease-in;
								}
								&:hover {
									transition: 0.3 ease-in;
									border: 0.1rem solid ${variable.color.dark_grey};
								}
								&.active,
								&:active {
									background-color: ${variable.color.violet};
									transition: 0.3 ease-in;
									a {
										transition: 0.3 ease-in;
										color: ${variable.color.gold};
									}
								}
							}
							&-link {
							}
						}
					`}</style>
				</React.Fragment>
			);
        }
        return list;
	};
	return (
		<>
			<div className="Paginate">
				<ul className="page">
					{currentPage > 1 && (
						<Link href={changeQueryURL({ ...query, page: currentPage - 1 })}>
							<div><ArrowPrev.Paging /></div>
						</Link>
					)}
					{renderPage()}
					{currentPage < totalPage && (
						<Link href={changeQueryURL({ ...query, page: currentPage + 1 })}>
							<div><ArrowNext.Paging /></div>
						</Link>
					)}
				</ul>
			</div>
			<style jsx>{`
				.page {
					display: flex;
					justify-content: center;
				}
			`}</style>
		</>
	);
}
