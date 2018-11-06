import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const AvatarField = ({ record, size }) => (
    <Avatar
        src={`/api/avatar/${record.id}.jpg?size=${size}x${size}`}
        size={size/3}
        style={{ width: size/3, height: size/3 }}
    />
);

AvatarField.defaultProps = {
    size: 96,
};

export default AvatarField;