import React from 'react'
import styled from 'styled-components'
import { Grid, Text } from './index'

const Input = (props) => {

    const { label, placeholder, width, max_width, _onChange, type, multiLine, value, bg, color } = props

    if (multiLine) {
        return (
            <Grid>
                {label && <Text margin='0px'>{label}</Text>}
                <ElTextarea rows={10} color={color} width={width} max_width={max_width} bg={bg} placeholder={placeholder} onChange={_onChange}></ElTextarea>
            </Grid>
        )
    }

    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin='0px'>{label}</Text>}
                <ElInput type={type} color={color} width={width} placeholder={placeholder} bg={bg} onChange={_onChange}></ElInput>
            </Grid>
        </React.Fragment>
    )
}

Input.defaultProps = {
    multiLine: false,
    label: false,
    placeholder: '텍스트를 입력해주세요',
    width: '100%',
    max_width: '100%',
    type: 'text',
    _onChange: () => { },
    value: '',
    bg: false,
    color: 'black',
}

const ElTextarea = styled.textarea`
    color: ${(props) => props.color};
    border: 0px;
    width: ${(props) => props.width};
    max-width: ${(props) => props.max_width};
    min-width: 30%;
    max-height: 200px;
    min-height: 100px;
    padding: 12px 4px;
    font-size: 20px;
    box-sizing: border-box;
    resize: none;
    
    ::placeholder {
        color:#ccc;
    }
    background-color: ${(props) => props.bg};
`

const ElInput = styled.input`
    color: ${(props) => props.color};
    border: 0px;
    width: ${(props) => props.width};
    padding: 12px 4px;
    box-sizing: border-box;
    font-size: 20px;

    ::placeholder {
        color:#ccc;
    }
    background-color: ${(props) => props.bg};
`

export default Input;