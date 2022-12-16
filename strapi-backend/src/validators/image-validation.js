const AllowedPictureFormats = require("../enums/AllowedPictureFormats");

function validateImageType(image) {
	if (!image) return true;
	if (Object.values(AllowedPictureFormats).indexOf(image.type) > -1) {
		return true;
	}
	return false;
}

function validateImageSize(image, maxMbSize) {
	if (!image) return true;
	const maxSize = maxMbSize * 1024 * 1024;
	if (image.size > maxSize) return false;
	return true;
}

module.exports = {
	validateImageType,
	validateImageSize,
};
