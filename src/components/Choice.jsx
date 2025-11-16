import React from "react";
import styled from "styled-components";
import { Component } from "react";

const ChoiceWrapper = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #b0b0b0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const SelectedImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid #222;
  background: #1c1c1c;
  padding: 8px;
`;

class Choice extends Component {
  render() {
    const { selected } = this.props;

    if (!selected) {
      return <ChoiceWrapper>Selected sticker: none</ChoiceWrapper>;
    }

    return (
      <ChoiceWrapper>
        <div>Selected sticker: {selected.label}</div>
        <SelectedImg src={selected.img} alt={selected.label} />
      </ChoiceWrapper>
    );
  }
}

export default Choice;