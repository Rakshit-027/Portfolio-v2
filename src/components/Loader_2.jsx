import React from 'react';
import styled from 'styled-components';

const Loader_2 = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    margin-left:-10px;
    margin-top:-10px;
    box-sizing: border-box;
    background-clip: padding-box;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.1);
    -webkit-mask: linear-gradient(rgba(24, 24, 24, 0.2), rgba(24, 24, 24,0.9) 90%);
    transform-origin: 50% 60%;
    transform: perspective(200px) rotateX(66deg);
  }

  .loader:before, .loader:after {
    content: "";
    position: absolute;
    margin: -4px;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 0.05;
    border: inherit;
    border-color: transparent;
    animation: spinner-spin 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite, spinner-fade 1.2s linear infinite;
  }

  .loader:before {
    border-top-color: #66e6ff;
  }

  .loader:after {
    border-top-color: #f0db75;
    animation-delay: 0.3s;
  }

  @keyframes spinner-spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinner-fade {
    20% {
      opacity: 0.1;
    }

    40% {
      opacity: 1;
    }

    60% {
      opacity: 0.1;
    }
  }`;

export default Loader_2;
