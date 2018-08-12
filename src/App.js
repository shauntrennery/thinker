import React, { Component } from 'react'
import common from './common'

// elements
import { ConnectedRouter } from 'connected-react-router'
import Helmet from 'react-helmet'
import { Route, Switch } from 'react-router'

// pages

import Intro from './pages/Intro'
import NoMatch from './pages/NoMatch'
import Swipe from './pages/Swipe'

const Background = common.lib.styled.div`
  background: url(${props => props.src}) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0
`

const Container = common.lib.styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 400px;
  background-color: rgba(255,255,255,0.9);
  box-shadow: 2px 2px 10px 3px rgba(0,0,0,.2);
  border-radius: 3px;
  padding: 20px;
  text-align: center;
  overflow: hidden;
`

class App extends Component {
  static propTypes = {
    history: common.lib.PropTypes.object
  }

  render() {
    const { currentBackground, history } = this.props

    return (
      <ConnectedRouter history={history}>
        <Background src={currentBackground}>
          <Helmet
            htmlAttributes={{ lang: 'en', amp: undefined }}
            titleTemplate={common.config.value('site.titleTemplate')}
            defaultTitle={common.config.value('site.title')}
            meta={[{ name: 'description', content: common.config.value('site.description') }, { name: 'keywords', content: common.config.value('site.keywords') }]}
          />

          <Container>
            <Switch>
              <Route exact path="/" component={Intro} />
              <Route exact path="/swipe" component={Swipe} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </Background>
      </ConnectedRouter>
    )
  }
}

const mapStateToProps = common.lib.createStructuredSelector({
  currentBackground: common.selectors.unsplash.current()
})

export default common.lib.connect(mapStateToProps)(App)
