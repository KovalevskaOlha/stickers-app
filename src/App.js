import React, { Component } from 'react';
import "./App.css";
import styled from 'styled-components';
import stickersData from './data/stickersData.json';
import StickerList from './components/StickerList';
import Choice from './components/Choice';

const AppWrapper = styled.div`
  margin: 0;
  padding: 20px 0;
  background: #121212; 
  color: #e0e0e0;
  text-align: center;
  font-family: Arial, sans-serif;
`;

class App extends Component {
  state = {
    selectedSticker: "",
  };

  handleClick = (label) => {
    this.setState({ selectedSticker: label });
  };

  render() {
    return (
      <AppWrapper>
        <h1>Sticker Park</h1>
        <StickerList
          stickers={stickersData}
          handleClick={this.handleClick}
        />
        <Choice selected={this.state.selectedSticker} />
      </AppWrapper>
    );
  }
}

export default App;
