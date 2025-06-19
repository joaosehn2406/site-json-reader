// components/StatusMessage.js
import React from 'react';

const StatusMessage = ({ statusMessage, statusType }) => {
    return (
        statusMessage && (
            <div style={{ backgroundColor: statusType === 'success' ? 'green' : 'red' }}>
                <p>{statusMessage}</p>
            </div>
        )
    );
};

export default StatusMessage;
