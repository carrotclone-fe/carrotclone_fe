import React from "react";
import styled from "styled-components";

const Dgrid = (props) => {
  const {
    _className,
    is_container,
    is_flex,
    flex_align,
    flex_justify,
    padding,
    children,
  } = props;
  const styles = {
    is_container,
    is_flex,
    flex_align,
    flex_justify,
    className: _className,
    padding,
  };
  return <GridBox {...styles}>{children}</GridBox>;
};

export default Dgrid;

const GridBox = styled.div`
  ${({ is_container }) =>
    is_container &&
    `
              width: 80%;
              margin: 0 auto;
              max-width: 800px;
            `}
  ${({ is_flex }) => is_flex && "display: flex;"}
  ${({ flex_align }) => flex_align && `align-items: ${flex_align};`}
  ${({ flex_justify }) => flex_justify && `justify-content: ${flex_justify};`}
  ${({ padding }) => padding && `padding: ${padding};`}
`;
