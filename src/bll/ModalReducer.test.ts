import { modalReducer, SetIsModalActive, SetLoginModalAction, SetRegistrationModalAction } from "./ModalReducer"

type StartStateType = {
  loginChildModal:boolean
  registrationChildModal:boolean
  isModalActive:boolean
}

let startState:StartStateType

beforeEach(()=>{
  startState={
    loginChildModal:false,
    registrationChildModal:false,
    isModalActive:false
  }
})
describe('check modalReducer SetIsModalActive branch',()=>{
  it('isModalActive with value true',()=>{
    const endState = modalReducer(startState,SetIsModalActive(true))
    expect(endState.isModalActive).toBe(true)
    })
  it('isModalActive  with value false',()=>{
      const endState = modalReducer(startState,SetIsModalActive(false))
      expect(endState.isModalActive).toBe(false)
    }) 
})
describe('check modalReducer SetLoginModalAction branch',()=>{
  it('loginChildModal with value true',()=>{
    const endState = modalReducer(startState,SetLoginModalAction(true))
    expect(endState.loginChildModal).toBe(true)
    })
  it('loginChildModal  with value false',()=>{
      const endState = modalReducer(startState,SetLoginModalAction(false))
      expect(endState.loginChildModal).toBe(false)
    }) 
})
describe('check modalReducer SetRegistrationModalAction branch',()=>{
  test('registrationChildModal with value true',()=>{
    const endState = modalReducer(startState,SetRegistrationModalAction(true))
    expect(endState.registrationChildModal).toBe(true)
    })
  test('registrationChildModal  with value false',()=>{
      const endState = modalReducer(startState,SetRegistrationModalAction(false))
      expect(endState.registrationChildModal).toBe(false)
    }) 
})
