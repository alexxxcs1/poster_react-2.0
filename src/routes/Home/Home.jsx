import React, { Component } from 'react'
import style from './Home.scss'

import ProgressBanner from '../../components/ProgressBanner'
import Button from '../../components/Button'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageonload:false,
    };
  }
  componentDidMount()
  { 
    setTimeout(() => {
      this.setState({
        pageonload:true,
      })
    }, 1000);
  }
  render() {
    return (
      <div>
        <ProgressBanner loaded={this.state.pageonload} />

        <div className={style.HomeBox}>
          <div className={style.bannerBox}>

            <Button BtnText='选择会议'/>

          </div>
          <div className={style.HomeIndex}>
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
}

export default Home
