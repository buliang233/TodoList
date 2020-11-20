<template>
	<div>
		<MainHeader></MainHeader>
		<MainTodo></MainTodo>
		<MainFooter></MainFooter>
	</div>
</template>

<script>
	import './assets/styles/global.styl'
	import MainHeader from './components/MainHeader.vue'
	import MainTodo from './components/MainTodo/MainTodo.vue'
	import MainFooter from './components/MainFooter.vue'
	export default {
		name: 'App',
		components:{
			MainHeader,
			MainTodo,
			MainFooter
		}
		
	}
</script>

<style lang="stylus" scoped>

</style>
