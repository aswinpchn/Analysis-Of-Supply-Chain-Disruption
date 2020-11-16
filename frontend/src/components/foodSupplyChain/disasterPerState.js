import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Common/foodSupplyNavbar'
import './foodSupplyDashboard.css'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import DisasterStateComponent from './disasterStateComponent'
import DisasterTable from './disastersTable'

class DisasterBasedAnalysis extends Component {
	constructor() {
		super()
		this.state = {
			allDisasters: [],
			yearRange: { min: 1980, max: 2020 },
			selectedDisaster: null,
			disasterCount: {},
			isFetched: false
		}
	}

	componentDidMount() {
		axios.get(`/filters/allDisasters`)
			.then((allDisastersResponse) => {
				this.setState({
					allDisasters: allDisastersResponse.data,
					selectedDisaster: allDisastersResponse.data[0]
				})
                this.updateGraph(allDisastersResponse.data[0], this.state.yearRange.min, this.state.yearRange.max)
			})
	}

	onChangeDisaster = (e) => {
        this.updateGraph(e.target.value, this.state.yearRange.min, this.state.yearRange.max)
		this.setState({
			selectedDisaster: e.target.value
		})
	}

	onChangeYear = (e) => {
        this.updateGraph(this.state.selectedDisaster, e.min, e.max)
        this.setState({
            yearRange: e
        })
	}

	updateGraph = (disaster, startYear, endYear) => {
		axios.get(`/analysis/disastersByState?disaster=${disaster}&startYear=${startYear}&endYear=${endYear}`)
			.then((disastersByStateResponse) => {
				this.setState({
					disasterCount: disastersByStateResponse.data,
                    isFetched: true
				})
			})
	}

	render() {
		if (this.state.isFetched === false) {
			return (
				<div>
					<Navbar />
					<div className='row m-5'>
						<div className='col-md-3'>
							<p id='year'>Year range</p>
						</div>
						<div className='col-md-9'>
							<InputRange
								maxValue={2020}
								minValue={1980}
								value={this.state.yearRange}
								onChange={this.onChangeYear}
							/>
						</div>
					</div>
					<div className="text-center">
						<img src="loading.gif" className="w-25" />
					</div>
				</div>
			)
		}
		var allDisasters = []
		for (var disaster of this.state.allDisasters) {
			allDisasters.push(<option value={disaster}>{disaster}</option>)
		}

		return (
			<div>
				<Navbar />
				<div className='row m-5'>
					<div className='col-md-3'>
						<p id='year'>Year range</p>
					</div>
					<div className='col-md-9'>
						<InputRange
							maxValue={2020}
							minValue={1980}
							value={this.state.yearRange}
							onChange={this.onChangeYear}
						/>
					</div>
				</div>

				<div className='row m-5'>
					<div className='col-md-3'>
						<p id='year'>Type of disaster *</p>
					</div>
					<div className='col-md-3'>
						<select
							class="custom-select"
							onChange={this.onChangeDisaster}
							value={this.state.selectedDisaster}
						>
							{allDisasters}
						</select>
					</div>
					{/* <div className='col-md-3 offset-md-1'>
						<button className="btn btn-success w-100" onClick={this.updateGraph}>Update Graph</button>
					</div> */}
				</div>

				<div className='m-5'>
					<DisasterStateComponent disasterCount={this.state.disasterCount} />
				</div>

				<DisasterTable />
			</div>
		)
	}
}

//export FoodSupplyHoliday Component
export default DisasterBasedAnalysis
