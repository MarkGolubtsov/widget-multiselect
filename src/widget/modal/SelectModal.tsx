import React, {createContext, useContext, useReducer} from 'react';
import {getDefaultState, widgetReducer, WidgetState} from 'widget/store/store';
import {Col, Modal, Row} from 'antd';
import {Actions} from 'widget/store/actions';
import {SearchInput} from 'widget/modal/SearchInput';
import {FilterSelect} from 'widget/modal/FilterSelect';


const WidgetStore = createContext<[WidgetState, React.Dispatch<Actions>]>([getDefaultState([], []), () => null]);

WidgetStore.displayName = 'SelectModal store';

export const useStore = () => useContext(WidgetStore);

export type SelectModalProps = {
    items: string[];
    selectedItems: string[];
    onSave: (items: string[]) => void;
    onCancel: () => void;
};

export const SelectModal = ({items, selectedItems, onCancel}: SelectModalProps) => {

    const [widgetState, dispatch] = useReducer(widgetReducer, getDefaultState(items, selectedItems));

    return (
        <WidgetStore.Provider value={[widgetState, dispatch]}>
            <Modal okText={'Save'}
                   visible={true}
                   onCancel={onCancel}
                   centered={true}
                   width={600}
                   cancelButtonProps={{danger: true}}
                   title={'Select items'}>
                <Row>
                    <Col span={12}>
                        <SearchInput/>
                    </Col>
                    <Col span={11} offset={1}>
                        <FilterSelect/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        {JSON.stringify(widgetState.showItems)}
                    </Col>
                </Row>
            </Modal>
        </WidgetStore.Provider>
    );
}