import React from 'react'
import common from '../common'

// elements
import Helmet from 'react-helmet'
import { Route, Switch } from 'react-router'

// pages
import Intro from '../pages/Intro'
import NoMatch from '../pages/NoMatch'

const routes = (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'en', amp: undefined }}
      titleTemplate={common.config.value('site.titleTemplate')}
      defaultTitle={common.config.value('site.title')}
      meta={[{ name: 'description', content: common.config.value('site.description') }, { name: 'keywords', content: common.config.value('site.keywords') }]}
    />

    <Switch>
      <Route exact path="/" component={Intro} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
