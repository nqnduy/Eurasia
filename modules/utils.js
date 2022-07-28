export const capitalizeFirstLetter = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};
export const currency = (num) => {
	return new Intl.NumberFormat("vn").format(num);
};
export const changeQueryURL = (data) => {
	return "?" + new URLSearchParams(data).toString();
};