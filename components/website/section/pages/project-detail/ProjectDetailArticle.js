import React from 'react'
import GridLayout from '@/website/elements/GridLayout';
import ArticleIntroduction from '@/website/section/pages/project-detail/ArticleIntroduction';
import ImageWrap from '@/website/common/ImageWrap';

export default function ProjectDetailArticle() {
    const article = {
			name: "The Reverie",
			author: "Davide Sozzi",
			description:
				"Thành phố Hồ Chí Minh năng động và cởi mở luôn đầy sắc màu của những nền văn hóa khác nhau trên thế giới. Thế nhưng, với độ “đậm đặc” về chất Ý, và với quy mô 150 căn hộ, Sherwood Suites là một nơi hiếm hoi thể hiện đầy đủ tinh thần và nét đẹp của thiết kế Ý nói chung, và ngành nội thất Ý nói riêng.",

    };
    return (
			<>
				<div className="ProjectDetailArticle">
					<GridLayout>
						<ArticleIntroduction data={article} />
						<div className="image-1 col-1">
							<ImageWrap src="/images/project-detail-1.jpg" gif="/gifs/1246x650.gif" />
						</div>
						<p className="col-2">
							Để đáp ứng yêu cầu đưa không gian Sherwood Suites hướng đến “Art of living” (Nghệ thuật sống), Phòng Dự án của Eurasia Concept đã hợp tác
							chặt chẽ với đội ngũ thiết kế từ B&B Italia - thương hiệu nội thất có lịch sử hơn 50 năm, đã thay đổi diện mạo ngành nội thất Ý và toàn thế
							giới.
						</p>
						<div className="col-3">
							<div className="wrapText">
								<img src="/images/project-detail-2.jpg" alt="" />
								<div>
									<img src="/images/project-detail-3.jpg" alt="" />
									<h4>độ “đậm đặc” về chất Ý, và với quy mô 150 căn hộ,</h4>
									<p>
										Nhóm thiết kế tuyển chọn kỹ lưỡng từng miếng gạch lát, tấm thảm, đá marble… từ Ý và nhập trực tiếp về Việt Nam phục vụ dự án. Hơn
										150 căn hộ được trang bị nội thất từ B&B Italia, với đa phần là những thiết kế kinh điển và những sản phẩm đặt riêng được “đo ni
										đóng giày” cho dự án, sở hữu vẻ đẹp của sự hiện đại và sang trọng.
									</p>
								</div>
							</div>
						</div>
					</GridLayout>
				</div>
				<style jsx>{`
					.ProjectDetailArticle {
						.col-1 {
							grid-column: 2 / 15;
						}
						.col-2 {
							grid-column: 3 / 14;
						}
						.col-3 {
							grid-column: 4 / 13;
						}
						.col-4 {
							grid-column: 5 / 12;
						}
						.image {
							&-1 {
								margin-bottom: 4.2rem;
							}
						}
						p {
							font-family: "Lexend";
							font-size: 1.4rem;
							font-weight: 300;
							letter-spacing: 0.1em;
							line-height: 1.8em;
						}
                        h4 {
                            font-family: "CoGa";
                            font-size: 2.4rem;
                            line-height: 2.9rem;
                            letter-spacing: 0.3em;
                            text-transform: uppercase;
                        }
						.wrapText {
							display: flex;
                            justify-content: space-between;
						}
					}
				`}</style>
			</>
		);
}
