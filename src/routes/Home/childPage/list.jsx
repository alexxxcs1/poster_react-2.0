import React, { Component } from 'react'
import {api} from 'common/app'

import style from './list.scss'

export class homeList extends Component {
  constructor(props)
  {
    super(props);
    this.state={
        actlist:null,
    }
    this.createListItem = this.createListItem.bind(this);
  }
  componentDidMount()
  {
    api.getActList().then((res) => {
        if (res.status==1) {
            this.setState({
                actlist:res.data.info
            })
        }
        console.log(res);
      }, (err) => {
        console.log(err)
      })
  }
  createListItem()
  {
    if (this.state.actlist) {
        var cont = this;
    
        var itemNodes = this.state.actlist.map(function(itemBase) {
        
        return (
            <div className={style.itemBase}><img src={'http://poster.crnonline.org/' + itemBase.cover_pic} alt=""/></div>
        ); 
        });
        return itemNodes;
    }
  }
  render() {
    return (
      <div className={style.HomeListBox}>
        
        {this.createListItem()}

      </div>
    )
  }
}

export default homeList
