import React from 'react'
import { connect } from 'react-redux'
import Styled from 'styled-components'

import { fetchSmurfs } from '../actions'

const StyledSmurfsList = Styled.div`
    display: flex;
    flex-flow: row-reverse wrap;
    width: 80%;
    justify-content: space-around;
    align-items: center;

`

const StyledSmurf = Styled.div`
    box-sizing: border-box;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 5%;
    padding: 0 2%;
    background-color: #abd1b5;
    width: 20%;
    height: 20%;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    h3{
        text-align: center;
        color: white;
    }
    &:hover{
    filter: brightness(0.90); 
    }
}
`

const Smurfs = (props) => {

    return (
        <StyledSmurfsList>
            {props.isLoading ? <p>Loading Smurfs...</p>: null}    
            {props.error ? <p>Error loading Smurfs</p> : null}        
            {props.smurfsData.map(smurf => (
                <StyledSmurf key={smurf.id}>
                    <h3>{smurf.name}</h3>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                </StyledSmurf>
            ))}
        </StyledSmurfsList>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        smurfsData: state.smurfsData,
        error: state.error, 
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs)