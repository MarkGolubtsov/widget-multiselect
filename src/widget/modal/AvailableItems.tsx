import React from 'react';
import {useStore} from 'widget/modal/SelectModal';
import {FixedSizeList} from "react-window";
import {ItemContainer} from 'widget/modal/item/ItemContainer';


export const AvailableItems = () => {
    const [widgetStore] = useStore();
    return (
            <FixedSizeList
                height={350}
                itemCount={widgetStore.filteredItems.length}
                itemSize={35}
                width={250}
            >
                {ItemContainer}
            </FixedSizeList>
    )
}