import React from 'react';
import styled from 'styled-components';

const StickerWrapper = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 10px;
  object-fit: cover;
  cursor: pointer;
  background: #1c1c1c;
  padding: 8px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  border: 1px solid #222;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.08);
  }
`;

class Sticker extends React.Component {
  render() {
    const { sticker, handleClick } = this.props;

    return (
      <StickerWrapper
        src={sticker.img}
        title={sticker.label}
        onClick={() => handleClick(sticker.label)}
      />
    );
  }
}

export default Sticker;
