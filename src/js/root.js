import React from 'react';
import ReactDOM from 'react-dom';
// 响应式插件 MediaQuery
import  MediaQuery  from 'react-responsive';
// antd样式引入
import 'antd/dist/antd.css';
// Index组件引入
import PCIndex from './pc_index';
import MobileIndex from './mobile_index';

// App入口
class Root extends React.Component{
	render(){
		return (
			<div>
		    	{/* PC */}
		    	<MediaQuery query='(min-width: 1224px)'>
		      		<PCIndex/>
		    	</MediaQuery>

		    	{/* Moblie */}
		    	<MediaQuery query='(max-Width: 1224px)'>
		      		<MobileIndex/>
		    	</MediaQuery>
		  	</div>
		);
	}
}

ReactDOM.render(
	<Root />,
	document.getElementById('root')
);