import Enzyme,{shallow,render,mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { NotFound404 } from '../ui/components/main/notFound404/NotFound404'


Enzyme.configure({adapter:new Adapter()})

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson

console.error = message=>{
  throw new Error(message)
}

const getComponent =(props)=> shallow(<NotFound404 {...props}/>)

describe('Should render NotFound404 component include',()=>{
let component
beforeEach(()=>{
  component=getComponent()
})
  it('class .notFound404',()=>{
    const wrapper = component.find('.notFound404')
    expect(wrapper.length).toBe(1)
    })
    
    it('h1',()=>{
      const wrapper = component.find('h1')
      expect(wrapper.length).toBe(1)
      })
    it('SnapshotTest NotFound404 component',()=>{
      const component = render(<NotFound404/>)
      expect(component).toMatchSnapshot()
    })  
})


