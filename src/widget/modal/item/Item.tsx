import React from 'react';
import {Checkbox} from 'antd';

type ItemProps = {
    isSelected: boolean,
    disabled: boolean,
    onChange: () => void,
    value: string
};

export const Item = ({value, disabled, isSelected, onChange}: ItemProps) => {
    return (
        <Checkbox
            checked={isSelected}
            disabled={!isSelected && disabled}
            onChange={onChange}
        >
            {value}
        </Checkbox>
    )
}