import React, { Component } from 'react';
import {
  Person,
} from 'blockstack';
import Feed from '../../Feed';
import AddGif from './AddGif';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  	  person: {
  	  	name() {
          return 'Anonymous';
        },
  	  	avatarUrl() {
  	  	  return avatarFallbackImage;
  	  	},
  	  },
  	};
  }
  render() {
    const { handleSignOut, userSession } = this.props;
    const { person } = this.state;
    return (
      !userSession.isSignInPending() ?
      <div className="container body">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 align-middle">
            <div className="panel-welcome card" id="section-2">
              <div className="card-body">
                <div className="avatar-section">
                  <img src={ person.avatarUrl() ? person.avatarUrl() : avatarFallbackImage } className="img-rounded avatar" id="avatar-image" alt=""/>
                </div>
                <h1>Hello, <span id="heading-name">{ person.name() ? person.name() : 'Nameless Person' }</span>!</h1>
                <p className="lead">
                  <button
                    className="btn btn-primary btn-lg"
                    id="signout-button"
                    onClick={ handleSignOut.bind(this) }
                  >
                    Logout
                  </button>
                </p>
              </div>
            </div>
            <AddGif/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-8">
          <Feed/>
          </div>
        </div>

      </div>
       : null
    );
  }
  componentWillMount() {
    const { userSession } = this.props;
    this.setState({
      person: new Person(userSession.loadUserData().profile),
    });
  }
}
