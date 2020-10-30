import React from 'react';
import { myStore } from './Store';
import { Badge, Card, Avatar, Row, Col } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { Meta } = Card;
import './Shop.css'

export default function Shop(props) {
    const shopData = myStore.useState(s => s.nogozoData)
    const shop = shopData[props.id].shops
    const particularShop = shop[props.sid]
    const items = particularShop.items

    return (
        <div>
            <Row ><Col span={24} style={{textAlign:"center"}}><h2>Shop Name: {particularShop.name} </h2></Col></Row>
            <Row ><Col span={24} style={{textAlign:"center"}}><h3>Shop Name: {particularShop.address} </h3></Col></Row>

            <Row style={{textAlign:'center'}}>
                
                {items.map(d =>
                    <Col style={{padding:'5px'}} md={8} sm={24}>
                        <center>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="data:image/png;base64,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" />}
                        >
                            <Meta title={d.name} />
                            <b>{'Price: ' + d.price}</b>
                            {(!particularShop.status)?'':(<Row>
                                <Col className="mx-auto"><PlusOutlined style={{ fontSize: '26px', color: '#08c' }} theme="outlined" /></Col>
                                <Col className="mx-auto">
                                    <Badge count={1}>
                                        <a href="#" className="head-example" />
                                    </Badge></Col>
                                <Col className="mx-auto"><MinusOutlined style={{ fontSize: '26px', color: '#08c' }} /></Col>
                            </Row>)}
                            
                        </Card>
                        </center>
                    </Col>

                )}
                
            </Row>

        </div>
    )
}
