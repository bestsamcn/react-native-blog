import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');
//容器
export const container = StyleSheet.create({
	view:{
		width:width,
		height:height
	},
	height:{
		height:height
	},
	width:{
		width:width
	}
});

//颜色
export const color = StyleSheet.create({
	green:{
		color:'#1abc9c'
	},
	black:{
		color:'#2b4356'
	},
	black1:{
		color:'#3e5e77'
	},
	gray:{
		color:'#bbb'
	}
});

//外边距
export const margin = StyleSheet.create({
	left5:{
		marginLeft:5
	},
	left10:{
		marginLeft:10
	},
	right5:{
		marginRight:5
	},
	right10:{
		marginRight:10
	},
	right20:{
		marginRight:20
	},
	right30:{
		marginRight:30
	},
	top5:{
		marginTop:5
	},
	top10:{
		marginTop:10
	},
	top15:{
		marginTop:15
	},
	top20:{
		marginTop:20
	}
});


//字体
export const font = StyleSheet.create({
	size10:{
		fontSize:10
	},
	size12:{
		fontSize:12
	},
	size14:{
		fontSize:14
	},
	size16:{
		fontSize:16
	},
	size18:{
		fontSize:18
	},
	size20:{
		fontSize:20
	},
	size24:{
		fontSize:24
	},
	size30:{
		fontSize:30
	},
	bold:{
		fontWeight:'bold'
	}
});

//flex
export const flex = StyleSheet.create({
	start:{
		flex:0,
		justifyContent:'flex-start',
		flexDirection:'row',
		alignItems:'center'
	},
	startBaseline:{
		flex:0,
		justifyContent:'flex-start',
		flexDirection:'row',
		alignItems:'baseline'
	},
	center:{
		flex:0,
		justifyContent:'center',
		flexDirection:'row',
		alignItems:'center'
	}
})


