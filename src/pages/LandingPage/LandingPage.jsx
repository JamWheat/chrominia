import React, { Component } from 'react';

class LandingPage extends Component {
  state = {}
  render() {
    const user = this.props.user
    return (
      <>
        <h1>Welcome to Chrominia</h1>

        <p>Chrominia is a social project tracker for miniature building and painting, <br />intended for hobbyists who want to track their progress from purchase to parade!</p>

        <p>
          To make the most of Chrominia, we suggest you make a <a href="/signup">profile</a>.


        </p>
        <p>
          Once you've created your profile, head on over to the <a href="/allsupplies">supplies page</a> to keep track of your brushes, paints, and models!<br />
          Or add supplies to your <a href={`/viewwishlist`}> wishlist</a>!
        </p>
        {user && (user._id === this.props.user._id) &&
          <>
            <p>
              Don't forget to show your favorite work off in your <a href={`/gallery/${this.props.user._id}`}>image gallery</a> - <br />
            and then attach those images and supplies to a new <a href={`/projects/${this.props.user._id}`}>project</a>!
          </p>
          </>
        }
      </>
    );
  }
}



export default LandingPage;