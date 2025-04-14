/*!
* ebook5
* http://www.ebook5.net
*
* Copyright Luler Inc. 
* More infomation available at 
* http://www.ebook5.net/license
* Author by Universal Plus,Inc.
*
* Includes jQuery JavaScript Library 
* http://jquery.com/
* Copyright 2011, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
*/

var pagetitle = [
"Page 01",
"Page 02",
"Page 03",
"Page 04",
"Page 05",
"Page 06",
"Page 07",
"Page 08",
"Page 09",
"Page 10",
"Page 11",
"Page 12",
"Page 13",
"Page 14",
"Page 15",
"Page 16",
"Page 17",
"Page 18",
"Page 19",
"Page 20",
"Page 21",
"Page 22",
"Page 23",
"Page 24",
"Page 25",
"Page 26",
"Page 27",
"Page 28",
"Page 29",
"Page 30",
"Page 31",
"Page 32",
"Page 33",
"Page 34",
"Page 35",
"Page 36",
"Page 37",
"Page 38",
"Page 39",
"Page 40",
"Page 41",
"Page 42",
"Page 43",
"Page 44",
"Page 45",
"Page 46",
"Page 47",
"Page 48",
"Page 49",
"Page 50",
"Page 51",
"Page 52",
"Page 53",
"Page 54",
"Page 55",
"Page 56",
"Page 57",
"Page 58",
"Page 59",
"Page 60",
"Page 61",
"Page 62",
"Page 63",
"Page 64",
"Page 65",
"Page 66",
"Page 67",
"Page 68",
"Page 69",
"Page 70",
"Page 71",
"Page 72",
"Page 73",
"Page 74",
"Page 75",
"Page 76",
"Page 77",
"Page 78"
];
var pageImgPathList = [
"contents/image/book/medium/image-01.jpg?",
"contents/image/book/medium/image-02.jpg?",
"contents/image/book/medium/image-03.jpg?",
"contents/image/book/medium/image-04.jpg?",
"contents/image/book/medium/image-05.jpg?",
"contents/image/book/medium/image-06.jpg?",
"contents/image/book/medium/image-07.jpg?",
"contents/image/book/medium/image-08.jpg?",
"contents/image/book/medium/image-09.jpg?",
"contents/image/book/medium/image-10.jpg?",
"contents/image/book/medium/image-11.jpg?",
"contents/image/book/medium/image-12.jpg?",
"contents/image/book/medium/image-13.jpg?",
"contents/image/book/medium/image-14.jpg?",
"contents/image/book/medium/image-15.jpg?",
"contents/image/book/medium/image-16.jpg?",
"contents/image/book/medium/image-17.jpg?",
"contents/image/book/medium/image-18.jpg?",
"contents/image/book/medium/image-19.jpg?",
"contents/image/book/medium/image-20.jpg?",
"contents/image/book/medium/image-21.jpg?",
"contents/image/book/medium/image-22.jpg?",
"contents/image/book/medium/image-23.jpg?",
"contents/image/book/medium/image-24.jpg?",
"contents/image/book/medium/image-25.jpg?",
"contents/image/book/medium/image-26.jpg?",
"contents/image/book/medium/image-27.jpg?",
"contents/image/book/medium/image-28.jpg?",
"contents/image/book/medium/image-29.jpg?",
"contents/image/book/medium/image-30.jpg?",
"contents/image/book/medium/image-31.jpg?",
"contents/image/book/medium/image-32.jpg?",
"contents/image/book/medium/image-33.jpg?",
"contents/image/book/medium/image-34.jpg?",
"contents/image/book/medium/image-35.jpg?",
"contents/image/book/medium/image-36.jpg?",
"contents/image/book/medium/image-37.jpg?",
"contents/image/book/medium/image-38.jpg?",
"contents/image/book/medium/image-39.jpg?",
"contents/image/book/medium/image-40.jpg?",
"contents/image/book/medium/image-41.jpg?",
"contents/image/book/medium/image-42.jpg?",
"contents/image/book/medium/image-43.jpg?",
"contents/image/book/medium/image-44.jpg?",
"contents/image/book/medium/image-45.jpg?",
"contents/image/book/medium/image-46.jpg?",
"contents/image/book/medium/image-47.jpg?",
"contents/image/book/medium/image-48.jpg?",
"contents/image/book/medium/image-49.jpg?",
"contents/image/book/medium/image-50.jpg?",
"contents/image/book/medium/image-51.jpg?",
"contents/image/book/medium/image-52.jpg?",
"contents/image/book/medium/image-53.jpg?",
"contents/image/book/medium/image-54.jpg?",
"contents/image/book/medium/image-55.jpg?",
"contents/image/book/medium/image-56.jpg?",
"contents/image/book/medium/image-57.jpg?",
"contents/image/book/medium/image-58.jpg?",
"contents/image/book/medium/image-59.jpg?",
"contents/image/book/medium/image-60.jpg?",
"contents/image/book/medium/image-61.jpg?",
"contents/image/book/medium/image-62.jpg?",
"contents/image/book/medium/image-63.jpg?",
"contents/image/book/medium/image-64.jpg?",
"contents/image/book/medium/image-65.jpg?",
"contents/image/book/medium/image-66.jpg?",
"contents/image/book/medium/image-67.jpg?",
"contents/image/book/medium/image-68.jpg?",
"contents/image/book/medium/image-69.jpg?",
"contents/image/book/medium/image-70.jpg?",
"contents/image/book/medium/image-71.jpg?",
"contents/image/book/medium/image-72.jpg?",
"contents/image/book/medium/image-73.jpg?",
"contents/image/book/medium/image-74.jpg?",
"contents/image/book/medium/image-75.jpg?",
"contents/image/book/medium/image-76.jpg?",
"contents/image/book/medium/image-77.jpg?",
"contents/image/book/medium/image-78.jpg?"
];
var pageImgPathList_large = [
"contents/image/book/large/image-01.jpg?",
"contents/image/book/large/image-02.jpg?",
"contents/image/book/large/image-03.jpg?",
"contents/image/book/large/image-04.jpg?",
"contents/image/book/large/image-05.jpg?",
"contents/image/book/large/image-06.jpg?",
"contents/image/book/large/image-07.jpg?",
"contents/image/book/large/image-08.jpg?",
"contents/image/book/large/image-09.jpg?",
"contents/image/book/large/image-10.jpg?",
"contents/image/book/large/image-11.jpg?",
"contents/image/book/large/image-12.jpg?",
"contents/image/book/large/image-13.jpg?",
"contents/image/book/large/image-14.jpg?",
"contents/image/book/large/image-15.jpg?",
"contents/image/book/large/image-16.jpg?",
"contents/image/book/large/image-17.jpg?",
"contents/image/book/large/image-18.jpg?",
"contents/image/book/large/image-19.jpg?",
"contents/image/book/large/image-20.jpg?",
"contents/image/book/large/image-21.jpg?",
"contents/image/book/large/image-22.jpg?",
"contents/image/book/large/image-23.jpg?",
"contents/image/book/large/image-24.jpg?",
"contents/image/book/large/image-25.jpg?",
"contents/image/book/large/image-26.jpg?",
"contents/image/book/large/image-27.jpg?",
"contents/image/book/large/image-28.jpg?",
"contents/image/book/large/image-29.jpg?",
"contents/image/book/large/image-30.jpg?",
"contents/image/book/large/image-31.jpg?",
"contents/image/book/large/image-32.jpg?",
"contents/image/book/large/image-33.jpg?",
"contents/image/book/large/image-34.jpg?",
"contents/image/book/large/image-35.jpg?",
"contents/image/book/large/image-36.jpg?",
"contents/image/book/large/image-37.jpg?",
"contents/image/book/large/image-38.jpg?",
"contents/image/book/large/image-39.jpg?",
"contents/image/book/large/image-40.jpg?",
"contents/image/book/large/image-41.jpg?",
"contents/image/book/large/image-42.jpg?",
"contents/image/book/large/image-43.jpg?",
"contents/image/book/large/image-44.jpg?",
"contents/image/book/large/image-45.jpg?",
"contents/image/book/large/image-46.jpg?",
"contents/image/book/large/image-47.jpg?",
"contents/image/book/large/image-48.jpg?",
"contents/image/book/large/image-49.jpg?",
"contents/image/book/large/image-50.jpg?",
"contents/image/book/large/image-51.jpg?",
"contents/image/book/large/image-52.jpg?",
"contents/image/book/large/image-53.jpg?",
"contents/image/book/large/image-54.jpg?",
"contents/image/book/large/image-55.jpg?",
"contents/image/book/large/image-56.jpg?",
"contents/image/book/large/image-57.jpg?",
"contents/image/book/large/image-58.jpg?",
"contents/image/book/large/image-59.jpg?",
"contents/image/book/large/image-60.jpg?",
"contents/image/book/large/image-61.jpg?",
"contents/image/book/large/image-62.jpg?",
"contents/image/book/large/image-63.jpg?",
"contents/image/book/large/image-64.jpg?",
"contents/image/book/large/image-65.jpg?",
"contents/image/book/large/image-66.jpg?",
"contents/image/book/large/image-67.jpg?",
"contents/image/book/large/image-68.jpg?",
"contents/image/book/large/image-69.jpg?",
"contents/image/book/large/image-70.jpg?",
"contents/image/book/large/image-71.jpg?",
"contents/image/book/large/image-72.jpg?",
"contents/image/book/large/image-73.jpg?",
"contents/image/book/large/image-74.jpg?",
"contents/image/book/large/image-75.jpg?",
"contents/image/book/large/image-76.jpg?",
"contents/image/book/large/image-77.jpg?",
"contents/image/book/large/image-78.jpg?"
];
var pageImgPathList_thumb = [
"contents/image/book/small/image-01.jpg?",
"contents/image/book/small/image-02.jpg?",
"contents/image/book/small/image-03.jpg?",
"contents/image/book/small/image-04.jpg?",
"contents/image/book/small/image-05.jpg?",
"contents/image/book/small/image-06.jpg?",
"contents/image/book/small/image-07.jpg?",
"contents/image/book/small/image-08.jpg?",
"contents/image/book/small/image-09.jpg?",
"contents/image/book/small/image-10.jpg?",
"contents/image/book/small/image-11.jpg?",
"contents/image/book/small/image-12.jpg?",
"contents/image/book/small/image-13.jpg?",
"contents/image/book/small/image-14.jpg?",
"contents/image/book/small/image-15.jpg?",
"contents/image/book/small/image-16.jpg?",
"contents/image/book/small/image-17.jpg?",
"contents/image/book/small/image-18.jpg?",
"contents/image/book/small/image-19.jpg?",
"contents/image/book/small/image-20.jpg?",
"contents/image/book/small/image-21.jpg?",
"contents/image/book/small/image-22.jpg?",
"contents/image/book/small/image-23.jpg?",
"contents/image/book/small/image-24.jpg?",
"contents/image/book/small/image-25.jpg?",
"contents/image/book/small/image-26.jpg?",
"contents/image/book/small/image-27.jpg?",
"contents/image/book/small/image-28.jpg?",
"contents/image/book/small/image-29.jpg?",
"contents/image/book/small/image-30.jpg?",
"contents/image/book/small/image-31.jpg?",
"contents/image/book/small/image-32.jpg?",
"contents/image/book/small/image-33.jpg?",
"contents/image/book/small/image-34.jpg?",
"contents/image/book/small/image-35.jpg?",
"contents/image/book/small/image-36.jpg?",
"contents/image/book/small/image-37.jpg?",
"contents/image/book/small/image-38.jpg?",
"contents/image/book/small/image-39.jpg?",
"contents/image/book/small/image-40.jpg?",
"contents/image/book/small/image-41.jpg?",
"contents/image/book/small/image-42.jpg?",
"contents/image/book/small/image-43.jpg?",
"contents/image/book/small/image-44.jpg?",
"contents/image/book/small/image-45.jpg?",
"contents/image/book/small/image-46.jpg?",
"contents/image/book/small/image-47.jpg?",
"contents/image/book/small/image-48.jpg?",
"contents/image/book/small/image-49.jpg?",
"contents/image/book/small/image-50.jpg?",
"contents/image/book/small/image-51.jpg?",
"contents/image/book/small/image-52.jpg?",
"contents/image/book/small/image-53.jpg?",
"contents/image/book/small/image-54.jpg?",
"contents/image/book/small/image-55.jpg?",
"contents/image/book/small/image-56.jpg?",
"contents/image/book/small/image-57.jpg?",
"contents/image/book/small/image-58.jpg?",
"contents/image/book/small/image-59.jpg?",
"contents/image/book/small/image-60.jpg?",
"contents/image/book/small/image-61.jpg?",
"contents/image/book/small/image-62.jpg?",
"contents/image/book/small/image-63.jpg?",
"contents/image/book/small/image-64.jpg?",
"contents/image/book/small/image-65.jpg?",
"contents/image/book/small/image-66.jpg?",
"contents/image/book/small/image-67.jpg?",
"contents/image/book/small/image-68.jpg?",
"contents/image/book/small/image-69.jpg?",
"contents/image/book/small/image-70.jpg?",
"contents/image/book/small/image-71.jpg?",
"contents/image/book/small/image-72.jpg?",
"contents/image/book/small/image-73.jpg?",
"contents/image/book/small/image-74.jpg?",
"contents/image/book/small/image-75.jpg?",
"contents/image/book/small/image-76.jpg?",
"contents/image/book/small/image-77.jpg?",
"contents/image/book/small/image-78.jpg?"
];

/*検索用テキスト*/
var pageTextContents = [
	pagetitle[0] + ""
	, pagetitle[1] + ""
	, pagetitle[2] + ""
	, pagetitle[3] + ""
	, pagetitle[4] + ""
	, pagetitle[5] + ""
	, pagetitle[6] + ""
	, pagetitle[7] + ""
	, pagetitle[8] + ""
	, pagetitle[9] + ""
	, pagetitle[10] + ""
	, pagetitle[11] + ""
	, pagetitle[12] + ""
	, pagetitle[13] + ""
	, pagetitle[14] + ""
	, pagetitle[15] + ""
	, pagetitle[16] + ""
	, pagetitle[17] + ""
	, pagetitle[18] + ""
	, pagetitle[19] + ""
	, pagetitle[20] + ""
	, pagetitle[21] + ""
	, pagetitle[22] + ""
	, pagetitle[23] + ""
	, pagetitle[24] + ""
	, pagetitle[25] + ""
	, pagetitle[26] + ""
	, pagetitle[27] + ""
	, pagetitle[28] + ""
	, pagetitle[29] + ""
	, pagetitle[30] + ""
	, pagetitle[31] + ""
	, pagetitle[32] + ""
	, pagetitle[33] + ""
	, pagetitle[34] + ""
	, pagetitle[35] + ""
	, pagetitle[36] + ""
	, pagetitle[37] + ""
	, pagetitle[38] + ""
	, pagetitle[39] + ""
	, pagetitle[40] + ""
	, pagetitle[41] + ""
	, pagetitle[42] + ""
	, pagetitle[43] + ""
	, pagetitle[44] + ""
	, pagetitle[45] + ""
	, pagetitle[46] + ""
	, pagetitle[47] + ""
	, pagetitle[48] + ""
	, pagetitle[49] + ""
	, pagetitle[50] + ""
	, pagetitle[51] + ""
	, pagetitle[52] + ""
	, pagetitle[53] + ""
	, pagetitle[54] + ""
	, pagetitle[55] + ""
	, pagetitle[56] + ""
	, pagetitle[57] + ""
	, pagetitle[58] + ""
	, pagetitle[59] + ""
	, pagetitle[60] + ""
	, pagetitle[61] + ""
	, pagetitle[62] + ""
	, pagetitle[63] + ""
	, pagetitle[64] + ""
	, pagetitle[65] + ""
	, pagetitle[66] + ""
	, pagetitle[67] + ""
	, pagetitle[68] + ""
	, pagetitle[69] + ""
	, pagetitle[70] + ""
	, pagetitle[71] + ""
	, pagetitle[72] + ""
	, pagetitle[73] + ""
	, pagetitle[74] + ""
	, pagetitle[75] + ""
	, pagetitle[76] + ""
	, pagetitle[77] + ""

];


/* link */
var pageLinkContents = {
};

var pageImgSize = { width: 960, height: 678 };
var pageImgSize_large = { width: 3000, height: 2120 };
var pageImgSize_thumb = { width: 100, height: 71 };

/**
* page jump function
*/
function xjump(x) {
	return ebook.BookData.PageJump(x);
}


/** ebook_data
**********************************************************/
var ebook_data = {
	'pageTitleText': pagetitle,
	'pageTextContents': pageTextContents,
	'pageLinkContents': pageLinkContents,
	'pageImgPathList': pageImgPathList,
	'pageImgPathList_thumb': pageImgPathList_thumb,
	'pageImgPathList_large': pageImgPathList_large,
	'pageImgSize': pageImgSize,
	'pageImgSize_thumb': pageImgSize_thumb,
	'pageImgSize_large': pageImgSize_large,
	'use_pageSideToolbar': true,
	'pageTopDirectionIsLeft': true,
	'maxScaleX1' : true,
	'pageShadow' : false,
	'pageHintEnable': true,
	d: 0
};
