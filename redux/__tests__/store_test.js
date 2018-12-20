import configureStore from '../store'

const middlewares = []
const mockStore = () => configureStore(middlewares)

const addTodo = () => ({ type: 'ADD_TODO' })

describe('store', () => {
  it('can initialise with reducers', () => {
    const initialState = {}
    const store = mockStore(initialState)
    const actions = store.getActions
    const expectedPayload = { type: 'ADD_TODO' }
    expect(actions).toEqual(undefined)
  });
});
