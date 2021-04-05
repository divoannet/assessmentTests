import { useState } from 'react'
import './style.css'

const Tabs = ({ children, activeTabIndex }) => {
	const [activeTab, setActiveTab] = useState(activeTabIndex || 0)
	return (
		<div className='tabContainer'>
			<ul className='tabSwitcher'>
				{children.map((item, index) => (
					<li
						className={'tabLabel' + (index === activeTab ? ' active' : '')}
						key={item.props.title}
						index={index}
						onClick={() => setActiveTab(index)}
					>
						{item.props.title}
					</li>
				))}
			</ul>
			<div className='tabContent'>
				{children[activeTab]}
			</div>
		</div>
	)
}

export default Tabs
