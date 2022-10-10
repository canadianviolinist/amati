try
{
	cmSetupOther({"cm_TrackImpressions":""});
}
catch(e){}

var cmReferrer; 		//Not found on page...could be used globally
var cmDestination;	//Not found on page...could be used globally
var manual_cm_mmc;	//Found on page, but also could be used globally
var refURL;					//Found on page, but only in func signatures...so how this work???
var cm_lm_mo64enabled = true; //Found on page, could be used globally (unlikely)...will keep for now.

function ParseRef (url) {
	return '';
}

function cmCreateTechPropsTag(pageID, categoryID, cm_ven, cm_cat, cm_pla, cm_ite, linkShareID, custID, refURL,attributes) {
}

function cmCreatePageviewTag(pageID, categoryID, searchString, searchResults, cm_ven, cm_cat, cm_pla, cm_ite, linkShareID, custID, refURL,attributes) {
}

function cmCreateProductviewTag(productID, productName, categoryID, cm_ven, cm_cat, cm_pla, cm_ite,linkShareID, custID, refURL, cmCrossSell,totalReviewCount,avgRating,numberRatingsOnlyReviews,buyAgainPercentage,attributes) {
}

function cmCreateBazaarViewTag(productID, productName,categoryID) {
}

function cmCreateMasterMemberTag(MasterProductID, MasterProductName, MasterCatID, IsMaster, custID) {
}

function cmCreateShopAction5Tag(productID, productName, productQuantity, productPrice, categoryID,MasterProductID, MasterProductName, MasterCatID, IsMaster, cmCrossSell,attributes) {
}

function cmCreateShopAction9Tag(productID, productName, productQuantity,
				productPrice, customerID, orderID,
				orderTotal, categoryID, MasterProductID, MasterProductName,
				MasterCatID, IsMaster, cmCrossSell, attributes) {
}
function cmCreateOrderTag(orderID, orderTotal, orderShipping, customerID,
			  customerCity, customerState, customerZIP, custID, attributes) {
}

function cmCreateRegistrationTag(customerID, customerEmail, customerCity,
				customerState, customerZIP, customerGender, newsletterName,
				subscribe) {
}

function cmCreateUserErrorTag(pageID, categoryID, mMsgCode, mMsgType, mMsgClass, mMsgDesc, mServerName, mCloneName) {
}

function cmCreateDelayedShopTag(productID, productName, productQuantity, productPrice, categoryID, cmReason, cmShipDays) {
}

function cmCreateDivisionTag(cmDivisionID, cmZipCode) {
}

function cmCreatePageElementTag(elementID, elementCategory,attributes) {
}

function cmCreateProductElementTag(elementID, elementCategory, productID, productCategoryID, elementLocation,attributes) {
}

function myNormalizeURL(url, isHref) {
    return url;
}

function cmCheckCMEM(){

}

function cmMakeTag(){

}
