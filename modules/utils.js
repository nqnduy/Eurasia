export const capitalizeFirstLetter = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};
export const uniqueArray = (tag, arr) => arr.filter((item) => item.tag === tag);
