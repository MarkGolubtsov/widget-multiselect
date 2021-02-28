import React, {useEffect, useState} from 'react';
import {Input} from 'antd';
import {useStore} from 'widget/modal/SelectModal';
import {changeSearchString} from 'widget/store/actions';


export const SearchInput = () => {
    const [widgetStore, dispatch] = useStore();

    const [string, setString] = useState(widgetStore.searchString);

    useEffect(() => {
        const delaySaveInStore = setTimeout(() => {
            dispatch(changeSearchString(string))
        }, 500);
        return () => clearTimeout(delaySaveInStore)
    }, [string, dispatch]);

    useEffect(() => {
        setString(widgetStore.searchString);
    }, [widgetStore.searchString])

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
        setString(e.currentTarget.value);
    }

    return (
        <Input size="middle" placeholder="Text" onChange={handleOnChange} value={string}/>
    )
}