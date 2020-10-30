import React from 'react'
import { myStore } from './Store'
import { Router, Link, navigate } from "@reach/router";
import { Button, Card } from 'antd';
import { Col, Container, Row } from 'react-bootstrap'
export default function Shops(props) {
    const shopData = myStore.useState(s => s.nogozoData)
    const shops = shopData[props.id].shops
    console.log(shops)
    return (
        <div>
            <Row>
            {  
                shops.map((d, id) =>
                <Col md={4}>
                    <Card title={d.name}  className="mx-auto my-2" extra={<Button><Link to={'shop/'+id}>Buy</Link></Button>} style={{ width: 300 }}>
                        <p>{d.address}</p>
                        <p>{(d.status)?(<div style={{ color:'green' }}><b>OPEN</b></div>):(<div style={{ color:'red' }}><b>CLOSED</b></div>)}</p>
                    </Card>
                </Col>
                )
            }
            </Row>
        </div>
    )
}
