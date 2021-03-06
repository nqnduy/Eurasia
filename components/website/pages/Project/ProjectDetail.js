/* eslint-disable @next/next/no-img-element */
import React from "react";
import GridLayout from "@/website/elements/GridLayout";
import ArticleIntroduction from "@/website/section/pages/project-detail/ArticleIntroduction";
import ImageWrap from "@/website/common/ImageWrap";

export default function ProjectDetail() {
	const article = {
		name: "The Reverie",
		author: "Davide Sozzi",
		description:
			"Thành phố Hồ Chí Minh năng động và cởi mở luôn đầy sắc màu của những nền văn hóa khác nhau trên thế giới. Thế nhưng, với độ “đậm đặc” về chất Ý, và với quy mô 150 căn hộ, Sherwood Suites là một nơi hiếm hoi thể hiện đầy đủ tinh thần và nét đẹp của thiết kế Ý nói chung, và ngành nội thất Ý nói riêng.",
	};
	return (
		<>
			<div className="ProjectDetail">
				<GridLayout>
					<ArticleIntroduction data={article} />
					<div className="image-1 col-1">
						<ImageWrap src="/images/project-detail-1.jpg" gif="/gifs/1246x650.gif" />
					</div>
					<p className="col-2">
						Để đáp ứng yêu cầu đưa không gian Sherwood Suites hướng đến “Art of living” (Nghệ thuật sống), Phòng Dự án của Eurasia Concept đã hợp tác chặt
						chẽ với đội ngũ thiết kế từ B&B Italia - thương hiệu nội thất có lịch sử hơn 50 năm, đã thay đổi diện mạo ngành nội thất Ý và toàn thế giới.
					</p>
					<div className="col-3" style={{ margin: "6rem 0" }}>
						<div className="flex">
							<img className="image-2" src="/images/project-detail-2.jpg" alt="" />
							<div className="wrap-right">
								<img src="/images/project-detail-3.jpg" alt="" />
								<div>
									<h4>độ “đậm đặc” về chất Ý, và với quy mô 150 căn hộ,</h4>
									<p>
										Nhóm thiết kế tuyển chọn kỹ lưỡng từng miếng gạch lát, tấm thảm, đá marble… từ Ý và nhập trực tiếp về Việt Nam phục vụ dự án. Hơn
										150 căn hộ được trang bị nội thất từ B&B Italia, với đa phần là những thiết kế kinh điển và những sản phẩm đặt riêng được “đo ni
										đóng giày” cho dự án, sở hữu vẻ đẹp của sự hiện đại và sang trọng.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-2" style={{ marginBottom: 40 }}>
						<ImageWrap src="/images/project-detail-5.jpg" gif="/gifs/1052x550.gif" />
					</div>
					<div className="col-1">
						<p>
							Hệ thống sàn gỗ hiện đại chống dị ứng, đảm bảo an toàn. Khu vực nhà hàng với tông màu nâu trầm ấm. Điểm nhấn tại khu vực hồ bơi là thiết kế
							ghế ngoài trời Fat Outdoor của “Nhà thiết kế của thập kỷ” Patricia Urquiola. Sherwood Suites là điểm đến lý tưởng cho những người yêu nội
							thất, mong muốn tìm kiếm và gặp gỡ những tinh hoa nội thất Ý trong những lần dừng chân tại Sài Gòn.
						</p>
						<ul className="imgWrap">
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
					</div>
				</GridLayout>
			</div>
			<style jsx>{`
				.ProjectDetail {
					.image {
						&-1 {
							margin-bottom: 4.2rem;
						}
						&-2 {
							width: calc(50% - 4.5rem);
						}
					}
					.flex {
						display: flex;
						justify-content: space-between;
					}
					.wrap-right {
						width: calc(50% - 4.5rem);
						display: flex;
						flex-direction: column;
						justify-content: space-between;
					}
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
