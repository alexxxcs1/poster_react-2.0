import React, { Component } from 'react'

import style from './index.scss'

import mainImg from 'common/public/img/homeMainImg.png'

export class homeIndex extends Component {
  render() {
    return (
      <div>
        <img src={mainImg} alt=""/>
      </div>
    )
  }
}

export default homeIndex
