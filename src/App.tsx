import React, {useState} from 'react';
import {Widget} from 'widget/Widget';


const generatedDate = (count: number) => {
    const array = new Array(count);
    return Array.from(array.keys()).map(item => `Item ${item}`);
}

function App() {

    const [selectedItems, setSelected] = useState(generatedDate(3));

    const onChangeSelectedItems = (items: string[]) => {
        setSelected(items);
    }

    return (
        <div className="App">
            <Widget items={generatedDate(1000)} selectedItems={selectedItems}
                    onChangeSelectItems={onChangeSelectedItems}/>
        </div>
    );
}

export default App;
