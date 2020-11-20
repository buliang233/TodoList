<template>
	<header>
		<h1>TodoList</h1>
	</header>
</template>

<script>
	export default{
		name:'MainHeader'
	}
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/theme.styl'
	header{
		margin-top 50px
		text-align:center;
		h1{
			font-size :100px;
			font-weight :100;
			color :$lightred;
			text-shadow :5px 5px 5px rgba(0,0,0,.1)
		}
	}
	
</style>
