import React from 'react';
import { Link } from 'react-admin';

import FullNameField from './FullNameField';

const EmployeeLinkField = props => (
    <Link to={`/empl/${props.record.id}`}>
        <FullNameField {...props} />
    </Link>
);

EmployeeLinkField.defaultProps = {
    source: 'id',
    addLabel: true,
};

export default EmployeeLinkField;