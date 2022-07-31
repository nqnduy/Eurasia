import DetailLayout from "@/website/elements/DetailLayout";
import NewsDetail from "@/website/pages/News/NewsDetail";
import ApiCall from "modules/ApiCall";

export async function getServerSideProps(context) {
	const slug = context.query.slug || [];
	const res = await ApiCall({
		path: `/api/v1/news/${slug}`,
	});
	let data = null;
	if (res.status) {
		data = res.data;
	}

	const res2 = await ApiCall({
		path: `/api/v1/news?order=-1&orderBy=publishedAt&limit=2&idNotIn=61dd2e3d555ba4002639043e&isRandom=true&categories=61bb1cd906a9c80025ec5005`,
	});
	let otherNewsData = [];
	if (res2.status) {
		otherNewsData = res2.data.list;
	}
	return {
		props: {
			data,
			otherNewsData,
		},
	};
};


export default function NewsDetailPage(props) {
	const { banner, name, galleries } = props.data;

	return (
		<DetailLayout pageName={name.vi} dataRelatedNews={props.otherNewsData} dataGallery={galleries} imageBanner={banner}>
			<NewsDetail />
		</DetailLayout>
	);
}
