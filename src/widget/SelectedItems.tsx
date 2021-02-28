import React from 'react';
import {Col, Row} from 'antd';
import {CloseOutlined} from '@ant-design/icons';

type SelectedItemsProps = {
    items: string[],
    onDelete: (item: string) => void
}

export const SelectedItems = ({items, onDelete}: SelectedItemsProps) => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <strong>Selected items:</strong>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Row gutter={[12, 12]}>
                        {items.map(item =>
                            <Col key={item} span={4}>
                                {item} <CloseOutlined onClick={() => onDelete(item)}/>
                            </Col>
                        )}
                    </Row>
                </Col>
            </Row>
        </>
    )
}