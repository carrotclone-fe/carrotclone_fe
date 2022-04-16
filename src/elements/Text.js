import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, width, margin, children, underLine, _onClick } =
    props;

  const styles = { bold, color, size, width, margin, underLine, _onClick };

  return (
    <React.Fragment>
      <P {...styles} onClick={_onClick}>
        {children}
      </P>
    </React.Fragment>
  );
};

Text.defaultProps = {
  children: null,
  width: null,
  margin: "0px",
  bold: false,
  color: "#222831",
  size: "14px",
  underLine: false,
  _onClick: () => {},
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  ${(props) => (props.margin ? `margin: ${props.margin}` : "")};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  word-wrap: break-word;
  ${(props) =>
    props.underLine
      ? `
    text-decoration: underline;
    :hover{
        background-color: #fa0;
        cursor: pointer;
        text-decoration: underline;
    }`
      : null}
`;

export default Text;
