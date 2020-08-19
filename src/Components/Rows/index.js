import React from 'react'
import styled from "styled-components";

// Style 
const Title= styled.h2`

`
const Posters= styled.div`
`
// React

function Row({title, fetch}) {
    return (
        <div>
            <Title>{title}</Title>
            <Posters>{fetch}</Posters>

            
        </div>
    )
}

export default Row;
