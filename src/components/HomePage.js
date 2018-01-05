import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`

class HomePage extends Component {
  render() {
    return (
      <Container className="silverLake">
        <h2>Home Page coming soon!</h2>
        <h2>Sign up for updates!</h2>

        <div id="mc_embed_signup">
          <form action="https://google.us12.list-manage.com/subscribe/post?u=87bf5ca8cdaade94fcd872de5&amp;id=935cf5c9e7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
        	   <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
        	    <input type="email" defaultValue name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_87bf5ca8cdaade94fcd872de5_935cf5c9e7" tabIndex="-1" defaultValue /></div>
              <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>
        </div>

        <h2>P.S. I created a Twitter list featuring 100+ Dota 2 players, personalities, and teams! Feel free to subscribe and add more Dota 2 people!</h2>
        <p><a href="https://twitter.com/BERTWEAZE/lists/dota" target="_blank">https://twitter.com/BERTWEAZE/lists/dota</a></p>

      </Container>
    )
  }
}

export default HomePage
