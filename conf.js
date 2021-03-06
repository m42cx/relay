/*jslint node: true */
"use strict";

exports.port = 6611;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bSaveJointJson = true;
exports.bLight = false;


exports.storage = 'sqlite';


exports.initial_witnesses = [

];

/* new testnet
exports.initial_witnesses = [
	'2FF7PSL7FYXVU5UIQHCVDTTPUOOG75GX',
	'2GPBEZTAXKWEXMWCTGZALIZDNWS5B3V7',
	'4H2AMKF6YO2IWJ5MYWJS3N7Y2YU2T4Z5',
	'DFVODTYGTS3ILVOQ5MFKJIERH6LGKELP',
	'ERMF7V2RLCPABMX5AMNGUQBAH4CD5TK4',
	'F4KHJUCLJKY4JV7M5F754LAJX4EB7M4N',
	'IOF6PTBDTLSTBS5NWHUSD7I2NHK3BQ2T',
	'O4K4QILG6VPGTYLRAI2RGYRFJZ7N2Q2O',
	'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD',
	'PA4QK46276MJJD5DBOLIBMYKNNXMUVDP',
	'RJDYXC4YQ4AZKFYTJVCR5GQJF5J6KPRI',
	'WELOXP3EOA75JWNO6S5ZJHOO3EYFKPIR'
];
*/

/* old testnet
exports.initial_witnesses = [
	'5K7CSLTRPC5LFLOS3D34GBHG7RFD4TPO',
	'BTCI3SJOBSRA6TFF6GHI3SO4WDC3G2LY',
	'CCNMWLURGSS5NS4YFLOPGAVXKMQXTXZR',
	'EQYZCJQAJ4KHFTJ4BKUJFBWATCU5UO5A',
	'FZ2S2HU42RECG46BEJYV44DIQYGFFNI2',
	'IXFO5VS57ZMTBUTBZVG66ZF3K4WFLPJJ',
	'NZOBDXWJIL2JVXZGY3OBP5MMMZMR2YUD',
	'VEZA54TWIXIHZLHFHCEEBU3XFC7NKVKX',
	'WJWKAJ2H5REGDSCCQMFGCENCODK6MN3X',
	'ZAMTST6CVMQERNXQY3ZWIC5L2OMWWWTP',
	'ZUWW66QUJR57BZSVA3NLM5FRHAFSX6B7',
	'ZVT76QDYAXIIVYMWJWFMJPGYBZRY7JW7'
];
*/
exports.initial_peers = [
	'wss://byteball.org/bb'
];

console.log('finished relay conf');
