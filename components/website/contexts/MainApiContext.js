import ApiCall from "modules/ApiCall";
import { createContext, useContext, useEffect, useState } from "react";
import { notification, message } from "antd";

export const MainApiContext = createContext({});

export default function MainApiContextProvider({ children }) {
	const [homeContent, setHomeContent] = useState();
	const [inspirationCategories, setInspirationCategories] = useState();
	const [featureProduct, setFeatureProduct] = useState();
	const [footerContent, setFooterContent] = useState();
	const [categoriesList, setCategoriesList] = useState();
	const [productList, setProductList] = useState();
	const [brandList, setBrandList] = useState();
	const [roomType, setRoomType] = useState();
	const [classify, setClassify] = useState();
	const [statusProduct, setStatusProduct] = useState();
	const [productDetail, setProductDetail] = useState();
	const [relatedProductList, setRelatedProductList] = useState();
	const [pageContent, setPageContent] = useState();
	const [projectList, setProjectList] = useState();


	const getInspirationCategories = async (order) => {
		const res = await ApiCall({
			path: `/api/v1/frontend/inspiration-categories`,
		});

		if (res.status) {
			// console.log("Inspiration Categories", res.data.list);
			setInspirationCategories(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	};

	const getPageContent = async (page) => {
		const res = await ApiCall({
			path: `/api/v1/pages/find-by-page-code?pageCode=${page}`,
		});
			if (res.status) {
				console.log(`${page} content`, res.data);
				setPageContent(res.data);
			} else {
				notification.error({
					message: res.message || "Something went wrong",
				});
			}
	}

	const getHomeContent = async () => {
		const res = await ApiCall({
			path: `/api/v1/pages/find-by-page-code?pageCode=HOME`,
		});

		if (res.status) {
			//console.log("Home content", res.data);
			setHomeContent(res.data);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	};

	const getFeatureProduct = async () => {
		const res = await ApiCall({
			path: `/api/v1/products?isHighlight=true&brands=&order=1&orderBy=sortOrder&limit=30`,
		});

		if (res.status) {
			console.log("Feature Product", res.data.list);
			setFeatureProduct(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	};

	const getFooterContent = async () => {
		const res = await ApiCall({
			path: `/api/v1/frontend/branchs?order=1&orderBy=sortOrder`,
		});

		if (res.status) {
			// console.log("Footer content", res.data.list);
			setFooterContent(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	}

	const getCategoriesList = async () => {
		const res = await ApiCall({
			path: `/api/v1/product-categories?limit=9999999&isParent=true&order=1&orderBy=sortOrder`,
		});
		if (res.status) {
			//console.log("categories list:", res.data.list);
			setCategoriesList(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	}

	const getProductList = async () => {
		const res = await ApiCall({
			path: `/api/v1/products?limit=12&page=1&orderBy=sortOrder&order=1`,
		});
		if (res.status) {
			// console.log("product list:", res.data.list);
			setProductList(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	}

	const getBrandList = async () => {
		const res = await ApiCall({
			path: `/api/v1/brands?limit=99999`,
		});
		if (res.status) {
			// console.log("brand list:", res.data.list);
			setBrandList(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	};

	const getRoomType = async () => {
		const res = await ApiCall({
			path: `/api/v1/product-categories?limit=9999999&isParent=true&order=1&orderBy=sortOrder`
		});
		if (res.status) {
			// console.log("Room Type", res.data.list);
			setRoomType(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	};
	const getClassify = async () => {
		const res = await ApiCall({
			path: `/api/v1/product-categories?limit=9999999`,
		});
		if (res.status) {
			// console.log("Classify", res.data.list);
			setClassify(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	};

	const getStatusProduct = async () => {
		const res = await ApiCall({
			path: `/api/v1/prop-categories?limit=999999`,
		});
		if (res.status) {
			// console.log("status product:", res.data.list);
			setStatusProduct(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	};

	const getProductDetail = async (slug) => {
		const res = await ApiCall({
			path: `/api/v1/products/${slug}`
		});
		if (res.data) {
			// console.log("product detail", res.data);
			setProductDetail(res.data);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	}

	const getRelatedProductList = async () => {
		const res = await ApiCall({
			path: `/api/v1/products?categories=${category}&order=1&orderBy=sortOrder&idNotIn=628331f22f674a990214c41d`,
		});
		if (res.data) {
			// console.log("related product", res.data.list);
			setRelatedProductList(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	}

	const getProjectList = async () => {
		const res = await ApiCall({
			path: `/api/v1/frontend/projects?order=1&orderBy=sortOrder`,
		});
		if (res.data) {
			console.log("project list", res.data.list);
			setProjectList(res.data.list);
		} else {
			notification.error({
				message: res.message || "Something went wrong",
			});
		}
	}

	return (
		<MainApiContext.Provider
			value={{
				pageContent,
				getPageContent,

				inspirationCategories,
				getInspirationCategories,

				homeContent,
				getHomeContent,

				featureProduct,
				getFeatureProduct,

				footerContent,
				getFooterContent,

				categoriesList,
				getCategoriesList,

				productList,
				getProductList,

				brandList,
				getBrandList,

				roomType,
				getRoomType,

				classify,
				getClassify,

				statusProduct,
				getStatusProduct,

				productDetail,
				getProductDetail,

				relatedProductList,
				getRelatedProductList,

				projectList,
				getProjectList
			}}>
			{children}
		</MainApiContext.Provider>
	);
}
