import React from 'react'
import PropTypes from 'prop-types'
import { useSnapshot } from 'valtio'

import state from '../store'

const Tab = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
    const snap = useSnapshot(state)

    const activeStyles = isFilterTab && isActiveTab ? { backgroundColor: snap.color, opacity: 0.5 } : { backgroundColor: "transparent", opacity: 1 }

    return (
        <div key={'test'} className={`tab-btn ${isFilterTab ? 'rounder-full glassmorphism' : 'rounder-4'}`} onClick={handleClick} style={activeStyles}>
            <img src={tab.icon} alt={'test'} className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`} />
        </div>
    )
}


export default Tab
