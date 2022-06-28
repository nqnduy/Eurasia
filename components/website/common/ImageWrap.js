import asset from "@/plugins/assets/asset";

export default function ImageWrap({ src, gif, ...props }) {
	return (
		<>
			<style jsx>{`
				.ImageWrap {
					position: relative;
					overflow: hidden;
					div {
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: 0;
						background-size: cover !important;
						transition: all 0.4s ease-out;
					}
					img {
						width: 100%;
					}
				}
			`}</style>

			<div className="ImageWrap">
				<div style={{ background: `url(${asset(src)}) no-repeat center` }}></div>
				<img src={asset(gif)} {...props} />
			</div>
		</>
	);
}
