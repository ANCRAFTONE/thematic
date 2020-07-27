/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { createStore, applyMiddleware, compose, Dispatch } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { defaultThemes } from '@thematic/core'
import { reducer } from './reducers'
import { themeSelected, graphLoaded } from './actions'
import { graph } from '../data'

/**
 * State entry point for the app - kicks off async starter data, etc.
 */
export const init: any = (dispatch: Dispatch) => {
	dispatch(themeSelected(defaultThemes[1]) as any)
	dispatch(graphLoaded(graph))
}

export const store = createStore(
	reducer,
	compose(applyMiddleware(thunk, logger)),
)
