import SubButton from './components/SubButton';
import AddButton from './components/AddButton';
import ViewNumber from './components/ViewNumber';
import HomePage from './components/HomePage';
import SelfPage from './components/SelfPage';
import Page404 from './components/Page404';
import { Component } from 'react';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Count组件 */}
        <div>
          <h1>Count组件：</h1>
          <div style={{ border: '1px solid pink', padding: '30px' }}>
            <SubButton></SubButton>
            <ViewNumber></ViewNumber>
            <AddButton></AddButton>
          </div>
        </div>
        {/* 路由组件 */}
        <div>
          <h1>Router组件：</h1>
          <BrowserRouter>
            <div>
              <span>Menu:</span> <NavLink to='/home'>HOME</NavLink> | <Link to='/self'>SELF</Link>
            </div>
            <div className='router-view' style={{ border: '1px solid skyblue', padding: '40px' }}>
              <Routes>
                <Route path='/home' element={<HomePage></HomePage>}></Route>
                <Route path='/self' element={<SelfPage></SelfPage>}></Route>
                <Route path='*' element={<Page404></Page404>}></Route>
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
