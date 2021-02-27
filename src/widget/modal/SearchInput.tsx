import React, {useEffect, useState} from 'react';
import {Input} from 'antd';
import {useStore} from 'widget/modal/SelectModal';
import {changeSearchString} from 'widget/store/actions';


export const SearchInput = () => {
    const [state, dispatch] = useStore();

    const [string, setString] = useState(state.searchString);

    useEffect(() => {
        const delaySaveInStore = setTimeout(() => {
            dispatch(changeSearchString(string))
        }, 500);
        return () => clearTimeout(delaySaveInStore)
    }, [string, dispatch]);

    useEffect(() => {
        setString(state.searchString);
    }, [state.searchString])

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setString(e.currentTarget.value);
    }

    return (
        <Input size="large" placeholder="large size" onChange={handleOnChange} value={string}/>
    )
}