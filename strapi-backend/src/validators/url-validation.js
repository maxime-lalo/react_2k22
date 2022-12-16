function validateURL(url, root) {
	if (!url) return true;
	try {
		const urlObj = new URL(url);
		if (root) {
			if (urlObj.hostname === root || urlObj.hostname === `www.${root}`) {
				return true;
			}
			return false;
		}
		return true;
	} catch (e) {
		return false;
	}
}

function validateS3URL(link) {
	const s3Url = `https://${process.env.AWS_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com`;
	try {
		const url = new URL(link);
		if (url.origin !== s3Url) {
			throw new Error("URL not from our S3 bucket");
		}
		return true;
	} catch (e) {
		return false;
	}
}

module.exports = {
	validateURL,
	validateS3URL,
};
