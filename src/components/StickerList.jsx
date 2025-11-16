import React from "react";
import Sticker from "./Sticker";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 550px;
  margin: 0 auto;
`;

class StickerList extends React.Component {
  render() {
    const { stickers, handleClick } = this.props;

    return (
      <ListWrapper>
        {stickers.map((sticker, index) => (
          <Sticker
            key={index}
            sticker={sticker}
            handleClick={handleClick}
          />
        ))}
      </ListWrapper>
    );
  }
}

export default StickerList;
