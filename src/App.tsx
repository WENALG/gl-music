import React, { Suspense, useEffect, useRef } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from './router'
import { shallowEqualApp, useAppDispath, useAppSelector } from './store'
import AppHeader from './componnets/app-header'
import AppFooter from './componnets/app-footer'
import PlayerBar from './views/discover/c-views/player/player-bar'
import { fetchSongDetailAction } from './views/discover/c-views/player/store'

import ToTop from './componnets/to-top'
function App() {
  const dispatch = useAppDispath()
  useEffect(() => {
    dispatch(fetchSongDetailAction(1959528822))
  }, [])

  return (
    <div className="App">
      <div></div>
      <AppHeader />
      <div className="main">
        <Suspense fallback="">{useRoutes(routes)}</Suspense>
      </div>
      <ToTop />
      <PlayerBar />

      <AppFooter />
    </div>
  )
}

export default App
