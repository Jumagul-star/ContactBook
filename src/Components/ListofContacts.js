import React, { useState, useEffect } from 'react';
import { useCustomFetch } from './helpers/customFetch';
import { getContacts, deleteContact, saveContact } from './redux/actions';
import { url } from './helpers/url';
import { connect } from 'react-redux';
import Axios from 'axios';


function ListofContacts (props) {

    // const [text, setText] = useState('')
    const [isEdit, setIsEdit] = useState()

    const [value, setValue] = useState('')
    const [valueSurname, setValueSurname] = useState('')
    const [number, setNumber] = useState('')

    const {data, loading, error} =useCustomFetch({
        url: url + '/posts'
    })
    useEffect(() => {
        if(data)props.getContacts(data)
    }, [data])

    function editData(title, id) {
        setValue(value)
        setValueSurname(valueSurname)
        setNumber(number)
        if (isEdit !== id) {
            setIsEdit(id)
        } else {
            setIsEdit('')
        }
    }

    function delData(id) {
        async function delContact(id) {
            const res = await Axios.delete(`${url}/posts/${id}`)
            props.deleteContact(id)
        }
        delContact(id)
    }

    function saveData(id) {
        const data = {
            id: id,
            name: value,
            surname: valueSurname,
            number: number
        }
        if (isEdit !== id) {
            setIsEdit(id)
        } else {
            setIsEdit('')
        }

        async function saveContact(id) {
            const res = await Axios.patch(`${url}/posts/${id}`, data)
            props.saveContact(data)
        }
        saveContact(id)
    }


    return (
        <div className='list-group'>
            {props.users ? props.users.map(note => (
                <li key={note.id} className='list-group-item d-flex justify-content-between' style={{'backgroundColor': '#c5d9ef'}}>
                    {isEdit === note.id ?
                    <div>
                        <input className='w-50 ml-1' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Редактировать имя'></input>
                        <input className='w-50 ml-1 mt-3' value={valueSurname} onChange={(e) => setValueSurname(e.target.value)} placeholder='Редактировать фамилию'></input>
                        <input className='w-50 ml-1 mt-3' value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Редактировать номер телефона'></input>
                        <button className="btn btn-success btn-sm ml-3" onClick={() => saveData(note.id)}>Сохранить</button>
                    </div> :
                    <p>{note.id +1} {note.name} {note.surname} {note.number}</p>}
                    <div>
                        <button className="btn btn-warning btn-sm mr-3" onClick={()=>editData(note.title, note.id)}>Редактировать</button>
                        <button className="btn btn-danger btn-sm" onClick={() => delData(note.id)}>Удалить</button>
                    </div>
                </li>
                    )) : <p>ERROR</p> }
        </div>
    )
}


const mapStateToProps = (state) => {
    let{users} =state.UserReducer
    return {users}
}



export default connect(mapStateToProps, {getContacts, deleteContact, saveContact})(ListofContacts);