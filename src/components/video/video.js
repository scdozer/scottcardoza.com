import React, { Component } from 'react';
import axios from 'axios';
import './video.css';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: {}
    }
  }

  componentDidMount(){
    axios.get(`http://www.suckboards.com/wp-json/wp/v2/posts?per_page=1`).then( response => {
          this.setState({
            video: response.data[0]
        })
      })
  }

  render() {
    let background = this.state.video.better_featured_image ? this.state.video.better_featured_image.source_url : '#939393'
    let videoBg = {
      background: `url(${background})`
    }
    return (
      <div className="video">
          <a target="_blank" href={`http://timewellwasted.online/#/post/${this.state.video.id}`}>
            <div style={videoBg} className="videoBg">

            </div>
          </a>
      </div>
    )
  }
}
