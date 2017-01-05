import React from 'react'
import styled from 'styled-components'

export const PinsHeader = styled.div`
  width: 58px;
  position: absolute;
  left: 216px;
  height: 493px;
  background: #073642;
  top: 80px;
`

export const PinsColumn = styled.div`
  position: absolute;
  padding: 0;
  margin: 0;
  top: 87px;
  list-style: none;
  left: 0px;

  div {
    display:block;
    position:relative;
    font-size:15px;
    line-height:23px;
    height:22px;
    margin-bottom:2px;
    text-decoration: none;
    cursor:pointer;
  }

  div small {
    font-size:11px;
  }

  // div .phys {
  //   color: #073642;
  //   font-size: 0.8em;
  //   opacity: 0.8;
  //   position: absolute;
  //   left: 30px;
  //   text-indent: 0;
  // }

  div:hover,
  .active {
    background:rgb(245, 243, 237);
    color:#063541;
  }
`

export const PinsLeft = styled(PinsColumn)`
  div {
    width:244px;
    text-indent: 10px;
    color: #E9E5D2;
    border-top-right-radius: 13px;
    border-bottom-right-radius: 13px;
  }

  div .phys {
    text-align: right;
    left: auto;
    right: 30px;
  }

  div:first-child {
    border-radius: 0;
  }
`

export const PinsRight = styled(PinsColumn)`
  left:246px;
  div {
    text-indent:56px;
    color: #063541;
    width: 250px;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
  }
`

export const Pin = styled.div`
  display:block;
  position:relative;
  font-size:15px;
  line-height:23px;
  height:22px;
  margin-bottom:2px;
  text-decoration: none;
  cursor:pointer;

  small {
    font-size:11px;
    font-weight: normal;
  }

  .phys {
    color: #073642;
    opacity: 1;
    font-size: 0.8em;
    opacity: 0.8;
    position: absolute;
    top: 0px;
    width: 20px;
    height: 22px;
    border-radius: 11px;
    text-indent: 0px;
    line-height: 22px;
    left: 30px;
  }

  ${props => props.active && `
    &[data-type="power"] {
      background: #073642;
      color: #FFFFFF;
      font-weight: bold;
      .phys {
        color: #FFFFFF;
      }
      &:hover {
        background: #268BD2 !important;
        color: #FFFFFF !important;
      }
    }
    &[data-type="gpio"] {
      background:#ebe6d3 !important;
      font-weight: bold;
      color:#063541 !important;
      .phys {
        position: absolute;
        text-indent: 0;
      }
    }
    &[data-type="ground"] {
      .phys {
        padding-left: 31px;
        left: 0;
        background: #073642;
        color: #FFFFFF;
        font-weight:bold;
        opacity: 1;
        position: absolute;
        top: 0px;
        width: 20px;
        height: 22px;
        border-radius: 11px;
        text-indent: 0px;
        line-height: 22px;
      }
      &:hover {
        .phys {
          background: #268BD2 !important;
        }
      }
    }
  `}

  &:hover {
    background:#f5f3ed !important;
    color:#063541;
  }

`

export const Title = styled.div`
  width: 250px;
  font-size: 1.5em;
  line-height: 23px;
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 28px;
  z-index: 1;
  font-weight: 600;
`

export const Pinout = styled.div`
  font-family: 'Avenir', verdana, arial;
  position: relative;
  width: 292px;
  background: ${props => props.background || '#5F8645'};
  min-height: 653px;
  margin-right: 208px;
  border-top-right-radius: 46px;
  border-bottom-right-radius: 46px;
  text-align: left;

  &::before,
  &::after {
    content: '';
    display: block;
    width: 28px;
    height: 28px;
    background: #FFFFFF;
    border-radius: 50%;
    border: 14px solid ${props => props.borderColor || '#F7DF84'};
    right: 19px;
    top: 19px;
    position: absolute;
  }

  &::after {
    top: auto;
    bottom: 19px;
  }
`
