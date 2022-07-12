/* eslint-disable @next/next/no-img-element */
import GridLayout from '@/website/elements/GridLayout';
import React from 'react'
import ArticleIntroduction from '@/website/section/pages/project-detail/ArticleIntroduction';

export default function InspirationDetail() {
    const article = {
			name: "Fendi Casa",
			author: "Davide Sozzi",
			description:
				"Thành phố Hồ Chí Minh năng động và cởi mở luôn đầy sắc màu của những nền văn hóa khác nhau trên thế giới. Thế nhưng, với độ “đậm đặc” về chất Ý, và với quy mô 150 căn hộ, Sherwood Suites là một nơi hiếm hoi thể hiện đầy đủ tinh thần và nét đẹp của thiết kế Ý nói chung, và ngành nội thất Ý nói riêng.",
		};
    return (
			<>
				<div className="InspirationDetail">
					<GridLayout>
						<ArticleIntroduction data={article} />
						<div className="col-2">
							<img src="/images/inspiration-detail-1.jpg" alt="inspiration-image" />
							<p style={{ margin: "4rem 0 8rem 0" }}>
								Để đáp ứng yêu cầu đưa không gian Sherwood Suites hướng đến “Art of living” (Nghệ thuật sống), Phòng Dự án của Eurasia Concept đã hợp
								tác chặt chẽ với đội ngũ thiết kế từ B&B Italia - thương hiệu nội thất có lịch sử hơn 50 năm, đã thay đổi diện mạo ngành nội thất Ý và
								toàn thế giới.
							</p>
						</div>
						<ul className="imgWrap col-1">
							<li>
								<img src="/images/project-detail-6.jpg" alt="" />
							</li>
							<li>
								<img src="/images/project-detail-7.jpg" alt="" />
							</li>
							<li>
								<img src="/images/project-detail-8.jpg" alt="" />
								<img src="/images/project-detail-9.jpg" alt="" />
							</li>
						</ul>
					</GridLayout>
				</div>
				<style jsx>{`
					.InspirationDetail {
						.imgWrap {
							--gap: 2rem;
							display: flex;
							justify-content: space-between;
							margin: 6rem 0;
							li {
								width: calc(100% / 3 - (var(--gap) * 2 / 3));
								img {
									height: 100%;
								}
								&:last-child {
									display: flex;
									flex-direction: column;
									justify-content: space-between;
									img {
										height: calc(100% / 2 - (var(--gap) / 2));
									}
								}
							}
						}
					}
				`}</style>
			</>
		);
}
