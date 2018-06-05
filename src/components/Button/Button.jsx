import React, { Component } from 'react'
import style from './Button.scss'

export class Button extends Component {
  render() {
    return (
      <div className={style.BtnBox} style={this.props.style?this.props.style:{}}>
        {this.props.BtnText?this.props.BtnText:'默认值'}
      </div>
    )
  }
}

export default Button
