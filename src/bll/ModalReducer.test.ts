import { modalReducer, SetIsModalActive, SetLoginModalAction, SetLoginOutModalAction, SetRegistrationModalAction } from "./ModalReducer"

type StartStateType = {
  isLoginModalActive: boolean
  isLoginOutModalActive: boolean
  isRegistrationModalActive: boolean
  isModalActive: boolean
  isSignInModalActive: boolean
}

let startState: StartStateType

beforeEach(() => {
  startState = {
    isLoginModalActive: false,
    isLoginOutModalActive: false,
    isRegistrationModalActive: false,
    isModalActive: false,
    isSignInModalActive: false
  }
})
describe('check modalReducer SetIsModalActive branch', () => {
  it('isModalActive with value true', () => {
    const endState = modalReducer(startState, SetIsModalActive({ value: true }))
    expect(endState.isModalActive).toBe(true)
  })
  it('isModalActive  with value false', () => {
    const endState = modalReducer(startState, SetIsModalActive({ value: false }))
    expect(endState.isModalActive).toBe(false)
  })
})
describe('check modalReducer SetLoginModalAction branch', () => {
  it('loginChildModal with value true', () => {
    const endState = modalReducer(startState, SetLoginModalAction({ value: true }))
    expect(endState.isLoginModalActive).toBe(true)
  })
  it('loginChildModal  with value false', () => {
    const endState = modalReducer(startState, SetLoginModalAction({ value: false }))
    expect(endState.isLoginModalActive).toBe(false)
  })
})
describe('check modalReducer SetLoginOutModalAction branch', () => {
  it('loginOutChildModal with value true', () => {
    const endState = modalReducer(startState, SetLoginOutModalAction({ value: true }))
    expect(endState.isLoginOutModalActive).toBe(true)
  })
  it('loginOutChildModal  with value false', () => {
    const endState = modalReducer(startState, SetLoginOutModalAction({ value: false }))
    expect(endState.isLoginOutModalActive).toBe(false)
  })
})
describe('check modalReducer SetRegistrationModalAction branch', () => {
  test('registrationChildModal with value true', () => {
    const endState = modalReducer(startState, SetRegistrationModalAction({ value: true }))
    expect(endState.isRegistrationModalActive).toBe(true)
  })
  test('registrationChildModal  with value false', () => {
    const endState = modalReducer(startState, SetRegistrationModalAction({ value: false }))
    expect(endState.isRegistrationModalActive).toBe(false)
  })
})
