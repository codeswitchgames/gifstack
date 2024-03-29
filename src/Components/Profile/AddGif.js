import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { addGif } from '../../db'

class AddGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    let { target } = e;
    let { value } = target;
    this.setState({url: value})
  }
  async handleSubmit(e){
    e.preventDefault();
    let time = new Date().getTime();
    let state = this.state;
    state.time = time;
    await addGif(state);
    this.setState({url: ''});
    this.props.history.push('/');
  }
  render(){
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="gifUrlInput">Gif URL</label>
            <input name="url" type="text" className="form-control" onChange={this.handleChange} value={this.state.url} id="gifUrlInput" aria-describedby="gifInputHelp" placeholder="Enter Gif URL"/>
            <small id="gifInputHelp" className="form-text text-muted">None of your user info will be shared or stored!.</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(AddGif);
