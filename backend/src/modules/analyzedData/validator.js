`use strict`

import Joi from 'joi'

module.exports = {
	historicalData: {
		query: {
			commodityOne: Joi.string().required(),
			unitOne: Joi.string().required(),
			commodityTwo: Joi.string(),
			unitTwo: Joi.string(),
			commodityThree: Joi.string(),
			unitThree: Joi.string(),
			state: Joi.string().required(),
			startYear: Joi.number().required(),
			endYear: Joi.number().required(),
			},
		model: "getHistoricalData",
		group: "AnalyzedData",
		description: "Get analyzed data based on selected category, commodity and year range for food production data"
	},
	historicalDataByState: {
		query: {
			category: Joi.string().required(),
			commodity: Joi.string().required(),
			startYear: Joi.string().required(),
			endYear: Joi.string().required(),
			state: Joi.string().required()
			},
		model: "getHistoricalDataByState",
		group: "AnalyzedData",
		description: "Get analyzed data based on selected category, commodity, state and year range for food production data"
	},
	disastersByState: {
		query: {
			disaster: Joi.string().required(),
			startYear: Joi.number().required(),
			endYear: Joi.number().required()
		},
		model: "disastersByState",
		group: "Filter",
		description: "Get number of disasters that happened in each state for food production data"
	},
	yearlyDisasterData: {
		query: {
			commodityOne: Joi.string().required(),
			unitOne: Joi.string().required(),
			commodityTwo: Joi.string(),
			unitTwo: Joi.string(),
			commodityThree: Joi.string(),
			unitThree: Joi.string(),
			state: Joi.string().required(),
			year: Joi.number().required()
			},
		model: "yearlyDisasterData",
		group: "AnalyzedData",
		description: "Get analyzed data based on selected categories, commodities, units, state for food production data for a given year"
	},
	foodProductionByState: {
		query: {
			commodity: Joi.string().required(),
			unit: Joi.string().required(),
			startYear: Joi.number().required(),
			endYear: Joi.number().required()
		},
		model: "foodProductionByState",
		group: "AnalyzedData",
		description: "Get food production values of a commodity for a given unit for each state for a certain year range"
	},
	covidFoodProductionDisruptionByState: {
		query: {
			commodity: Joi.string().required(),
			unit: Joi.string().required(),
			state: Joi.string().required()
		},
		model: "covidFoodProductionDisruptionByState",
		group: "AnalyzedData",
		description: "Get food disruption percentage for production values of a commodity for a given unit for each state for 2015-2020"
	}
}