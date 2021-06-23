`use strict`

module.exports = {
	STATUS_CODE: {
		SUCCESS_STATUS: 200,
		CREATED_SUCCESSFULLY_STATUS: 201,
		ACCEPTED_STATUS: 202,
		NO_CONTENT_STATUS: 204,
		BAD_REQUEST_ERROR_STATUS: 400,
		UNAUTHORIZED_ERROR_STATUS: 401,
		FORBIDDEN_ERROR_STATUS: 403,
		NOT_FOUND_STATUS: 404,
		CONFLICT_ERROR_STATUS: 409,
		UNPROCESSABLE_ENTITY_STATUS: 422,
		INTERNAL_SERVER_ERROR_STATUS: 500,
		MOVED_PERMANENTLY: 301,
	},
	MESSAGES: {
		USER_NOT_FOUND: 'User not found',
		USER_ALREADY_EXISTS: 'User with this email id already exists',
		USER_DETAILS_ALREADY_EXISTS: 'Username, email id or phone number already exists',
		AUTHORIZATION_FAILED: 'Authorization failed'
	},
	ROLES: {
		ADMIN: 'admin',
		USER: 'user'
	},
	ALL_CATEGORIES : 'All',
	YEAR: {
		2001: 2001,
		2002: 2002,
		2003: 2003,
		2004: 2004,
		2005: 2005,
		2006: 2006,
		2007: 2007,
		2008: 2008,
		2009: 2009,
		2010: 2010,
		2011: 2011,
		2012: 2012,
		2013: 2013,
		2014: 2014,
		2015: 2015,
		2016: 2016,
		2017: 2017,
		2018: 2018,
		2019: 2019,
		2020: 2020
	},
	QUARTERS: {
		Q1 : 'Q1',
		Q2 : 'Q2',
		Q3 : 'Q3',
		Q4 : 'Q4'
	},
	MONTH: {
		JANUARY: 'JAN'
	},
	STATES: ["ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "FLORIDA", "GEORGIA", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEW HAMPSHIRE", "NEW JERSEY", "NEW MEXICO", "NEW YORK", "NORTH CAROLINA", "NORTH DAKOTA", "OHIO", "OKLAHOMA", "OREGON", "PENNSYLVANIA", "RHODE ISLAND", "SOUTH CAROLINA", "SOUTH DAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT", "VIRGINIA", "WASHINGTON", "WEST VIRGINIA", "WISCONSIN", "WYOMING"],
	STATES_COUNT : { 'ALABAMA': 0, 'ALASKA': 0, 'ARIZONA': 0, 'ARKANSAS': 0, 'CALIFORNIA': 0, 'COLORADO': 0, 'CONNECTICUT': 0, 'DELAWARE': 0, 'FLORIDA': 0, 'GEORGIA': 0, 'HAWAII': 0, 'IDAHO': 0, 'ILLINOIS': 0, 'INDIANA': 0, 'IOWA': 0, 'KANSAS': 0, 'KENTUCKY': 0, 'LOUISIANA': 0, 'MAINE': 0, 'MARYLAND': 0, 'MASSACHUSETTS': 0, 'MICHIGAN': 0, 'MINNESOTA': 0, 'MISSISSIPPI': 0, 'MISSOURI': 0, 'MONTANA': 0, 'NEBRASKA': 0, 'NEVADA': 0, 'NEW HAMPSHIRE': 0, 'NEW JERSEY': 0, 'NEW MEXICO': 0, 'NEW YORK': 0, 'NORTH CAROLINA': 0, 'NORTH DAKOTA': 0, 'OHIO': 0, 'OKLAHOMA': 0, 'OREGON': 0, 'PENNSYLVANIA': 0, 'RHODE ISLAND': 0, 'SOUTH CAROLINA': 0, 'SOUTH DAKOTA': 0, 'TENNESSEE': 0, 'TEXAS': 0, 'UTAH': 0, 'VERMONT': 0, 'VIRGINIA': 0, 'WASHINGTON': 0, 'WEST VIRGINIA': 0, 'WISCONSIN': 0, 'WYOMING': 0 },
	EXPORT: 'export',
	IMPORT: 'import'
}
