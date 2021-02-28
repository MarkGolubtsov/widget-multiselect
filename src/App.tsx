import React, {useEffect, useState} from 'react';
import {Widget} from 'widget/Widget';
import {StorageService} from 'StorageService';


const generatedDate = (count: number) => {
    const array = new Array(count);
    return Array.from(array.keys()).map(item => `Item ${item}`);
}
const storage = new StorageService<string[]>('selected items');

function App() {
    const [selectedItems, setSelected] = useState<string[]>([]);

    useEffect(() => {
        const selectedItemsFromStorage = storage.getValueIfExist();
        if (selectedItemsFromStorage) {
            setSelected(selectedItemsFromStorage);
        } else {
            setSelected(generatedDate(3));
        }
    }, [])

    useEffect(() => {
        storage.setValue(selectedItems);
    }, [selectedItems]);

    const onChangeSelectedItems = (items: string[]) => {
        setSelected(items.sort((first, second) => {
            return first > second ? 1 : -1;
        }));
    }

    return (
        <div className="App">
            <Widget items={generatedDate(1000)} selectedItems={selectedItems}
                    onChangeSelectItems={onChangeSelectedItems}/>
        </div>
    );
}

export default App;
