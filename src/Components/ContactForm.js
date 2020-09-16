import React, { useState } from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';
import { connect } from 'react-redux';
import { url } from './helpers/url';
import { addNewContact } from './redux/actions';


function ContactForm (props) {
    const [value, setValue] = useState('')
    const [valueSurname, setValueSurname] = useState('')
    const [number, setNumber] = useState('')

    function addContact(e) {
        e.preventDefault()

        const data = {
            id: Date.now(),
            name: value,
            number: number,
            surname: valueSurname
        }
        if(value !== '' && number !== '' && valueSurname !== '') {
            async function addData() {
                const response = await Axios.post(url + '/posts', data)
                props.addNewContact(data)
            }
            addData()
        }
        setValue('')
        setValueSurname('')
        setNumber('')
    }


    return (
        <div>
            <Form onSubmit={(event) => addContact(event)}>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label>Имя</Label>
                        <Input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Введите имя контакта" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label>Фамилия</Label>
                        <Input value={valueSurname} onChange={(e) => setValueSurname(e.target.value)} type="text" placeholder="Введите фамилию контакта" />
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label>Номер телефона</Label>
                        <Input value={number} onChange={(e) => setNumber(e.target.value)} type="text" placeholder="Введите номер телефона" />
                    </FormGroup>
                    </Col>
                
                    {/* <FormGroup>
                        <Label>Адрес</Label>
                        <Input type="text" placeholder="Исанова, 105"/>
                    </FormGroup>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="exampleCity">Город</Label>
                            <Input type="text"/>
                        </FormGroup>
                        </Col>
                        <Col md={4}>
                        <FormGroup>
                            <Label for="exampleState">Страна</Label>
                            <Input type="text"/>
                        </FormGroup>
                        </Col>
                    </Row> */}
                    <Col md={6}>
                        <Button type='submit' className='btn btn-success ml-5 mt-4'>Добавить новый контакт</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default connect(null, {addNewContact})(ContactForm)