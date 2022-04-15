import React from 'react';
import styled from 'styled-components'

const Button = (props) => {

    const { text, _onClick, children, margin, width, height, fs, fc, bg, rad } = props

    const styles = {
        margin,
        width,
        height,
        //폰트 사이즈
        fs,
        fc,
        //배경색
        bg,
        //border-radius
        rad,
    }

    return (
        <React.Fragment>
            <ELButton {...styles} onClick={_onClick}>{text ? text : children}</ELButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    children: null,
    text: false,
    margin: false,
    width: '100%',
    height: '100%',
    rad: false,
    color: '#fff',
    _onClick: () => { }
}

const ELButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
    background-color: ${(props) => props.bg};
    font-size: ${(props) => props.fs};
    color: ${(props) => props.fc};
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    border-radius: ${(props) => props.rad};
    :hover {
        background-color: #fa0;
        cursor: pointer;
    }
`

export default Button;