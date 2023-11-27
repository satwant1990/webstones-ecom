import React from 'react'

const Loading = () => {
    return (
        <div className='loadingOverlay'>
            <div className='loadingInner'>
                <div className="lds-dual-ring"></div>
            </div>
        </div>
    )
}

export default Loading