import React, { Component } from 'react';
import DownloadComponent from '../../../Common/download';

class DownloadCropsData extends Component {
    render() {
        const columns = [{
            id: 'State',
            displayName: 'State'
        }, {
            id: 'Quantity',
            displayName: `Number of occurance of ${this.props.disaster} between ${this.props.yearRange.min} and ${this.props.yearRange.max}`
        }];

        let datas = [];
		for (let val in this.props.disasterCount) {
            datas.push({
                'State': val,
                'Quantity': this.props.disasterCount[val]
            })
        }
        
        return (
            <DownloadComponent columns={columns} datas={datas} filename="disasters_per_state" />
        );
    }
}
//export DownloadCropsData Component
export default DownloadCropsData;