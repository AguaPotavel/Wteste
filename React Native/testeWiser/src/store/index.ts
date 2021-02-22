import { createStore , applyMiddleware, Store} from 'redux';
import { LoginState } from './ducks/types';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './ducks/rootReducer';
import rootSaga from '../store/ducks/rootSaga'

export interface ApplicationState {
    Login: LoginState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

export default store;