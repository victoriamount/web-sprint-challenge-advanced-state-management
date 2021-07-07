import React, { useEffect, useState } from 'react'
import Styled from 'styled-components'
import '../components/App.css'
import { connect } from 'react-redux'
import { fetchSmurfs, addNewSmurf } from '../actions'
import './App.css'

const StyledHeaderSection = Styled.header`
    display: flex;
    flex-flow: column nowrap;
    width: 20%;
    padding: 5%;
    align-items: center;
    color: #abd1b5;
    background-color: black;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    min-height: 100vh;

    form {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
`
const initialFormValues = {
    name: '',
    age: '',
    height: ''
}


const Header = (props) => {

    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = evt => {
        const { name, value } = evt.target
        setFormValues({ ...formValues, [name]: value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        props.addNewSmurf(formValues)
    }


    useEffect(() => {
        props.fetchSmurfs()
    }, [])

    return (
        <StyledHeaderSection>
            <h1>SMURF VILLAGE</h1>
            <br />
            <form onSubmit={onSubmit}>
                <input
                name='name'
                type='text'
                value={formValues.name}
                onChange={onChange}
                placeholder='Name'
                /><br />
                <input
                name='age'
                type='text'
                value={formValues.age}
                onChange={onChange}
                placeholder='Age'
                /> <br />
                <input
                name='height'
                type='text'
                value={formValues.height}
                onChange={onChange}
                placeholder='Height'
                /><br />
                <button className={'button'} >Add New Smurf</button>
            </form>
        </StyledHeaderSection>
    )
}


export default connect(null, { fetchSmurfs, addNewSmurf })(Header)
