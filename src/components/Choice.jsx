import React from "react";
import styled from "styled-components";
import { Component } from "react";

const ChoiceWrapper = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #b0b0b0;
`;

class Choice extends Component {
    render() {
        const {selected} = this.props;
        return <ChoiceWrapper>Selected sticker: {selected || "none" }</ChoiceWrapper>
    }
}

export default Choice;