import React from 'react';
import {Select} from 'antd';
import {useStore} from 'widget/modal/SelectModal';
import {Filter, filtersAction} from 'widget/store/filter';
import {changeFilter} from 'widget/store/actions';

const {Option} = Select;
export const FilterSelect = () => {
    const [state, dispatch] = useStore();

    const handleChange = (value: Filter) => {
        dispatch(changeFilter(value));
    }

    const filters = Array.from(Object.keys(filtersAction));

    return (
        <Select value={state.filter} onChange={handleChange}>
            {filters.map(value => {
                return <Option key={value} value={value}>{value}</Option>
            })}
        </Select>
    )
}