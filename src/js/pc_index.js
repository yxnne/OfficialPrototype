import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link 
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


function AComponent(props){
	return (
		<div>
			AAABBB
			<p>hahha I am  A</p>
		</div>
	);
}
function BComponent(props){
	return (
		<div>
			<h1>BBBBB</h1>
		</div>
	);
}
// PC端界面
export default class PCIndex extends React.Component{

	render(){
	  return (
	    <div>
	    <Router>
		  	<Layout className="layout">

		  		{/*页头*/}
			    <Header>
			      <div className="logo" />
			      <Menu theme="dark" mode="horizontal"
			        defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} >
			        <Menu.Item key="1"><Link to={'/d'}> nav 1</Link></Menu.Item>
			        <Menu.Item key="2"><Link to={'/e'}> nav 1</Link></Menu.Item>
			        <Menu.Item key="3">nav 3</Menu.Item>
			      </Menu>
			    </Header>

			    <Content style={{ padding: '0 50px' }}>
			      <Switch>
	            <Route exact path="/d" component={AComponent}/>
	            <Route path="/e" component={BComponent}/>
	          </Switch>
			    </Content>

			  	{/*页脚*/}
			    <Footer style={{ textAlign: 'center' }}>
			      Ant Design ©2016 Created by Ant UED
			    </Footer>
			  </Layout>
			  </Router>
			</div>
		);
	}

}