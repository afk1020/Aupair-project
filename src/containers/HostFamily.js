import React from 'react'
import HostFamilyCard from '../components/HostFamilyCard.js';


const HostFamily = (props) => {
	return (
		<div className="hostFamily-Collection">
		{props.hostFamilyData.map(hostFamily => {
		 return <HostFamilyCard
		 hostFamily ={hostFamily}
		 key = {hostFamily.id}
		 approval={props.approval}
		 />
	 })}
	 </div>
	)
}

export default HostFamily
