import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');



//容器
export const container = StyleSheet.create({
	view:{
		width:width,
		height:height
	},
	view_:{
		width:width,
		height:height-49
	},
	view__:{
		width:width,
		height:height-98
	},
	view___:{
		width:width,
		height:'100%'
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

//背景
export const bg = StyleSheet.create({
	white:{
		backgroundColor:'#fff'
	},
	gray:{
		backgroundColor:'#bbb'
	},
	gray_:{
		backgroundColor:'#eee'
	}
})

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

//内边距
export const padding = StyleSheet.create({
	a5:{
		padding:5
	},
	a10:{
		padding:10
	},
	a20:{
		padding:20
	},
	h5:{
		paddingHorizontal:5
	},
	h10:{
		paddingHorizontal:10
	},
	h20:{
		paddingHorizontal:20
	},
	h30:{
		paddingHorizontal:30
	},
	v5:{
		paddingVertical:5
	},
	v10:{
		paddingVertical:10
	},
	v20:{
		paddingVertical:20
	},
	v30:{
		paddingVertical:30
	},
	left5:{
		paddingLeft:5
	},
	left10:{
		paddingLeft:10
	},
	right5:{
		paddingRight:5
	},
	right10:{
		paddingRight:10
	},
	right20:{
		paddingRight:20
	},
	right30:{
		paddingRight:30
	},
	top5:{
		paddingTop:5
	},
	top10:{
		paddingTop:10
	},
	top15:{
		paddingTop:15
	},
	top20:{
		paddingTop:20
	}
});

//字体
export const font = StyleSheet.create({
	size10:{
		fontSize:10
	},
	size11:{
		fontSize:11
	},
	size12:{
		fontSize:12
	},
	size13:{
		fontSize:13
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
	size40:{
		fontSize:40
	},
	size50:{
		fontSize:50
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
		flex:1,
		justifyContent:'center',
		flexDirection:'row',
		alignItems:'center'
	}
});


