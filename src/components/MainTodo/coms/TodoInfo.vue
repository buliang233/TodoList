<template>
	<div class="todo-info">
		<span class="total">{{total}} items left</span>
		<div class="tabs">
			<a href="javascript:;" :class=" item==tab? 'actived':''" v-for="(item,index) in tabs" :key="index" @click="changeTab(item)">{{item}}</a>
		</div>
		<button class="clear" @click="clear">Clear Completed</button>
	</div>
</template>

<script>
	export default{
		name:'TodoInfo',
		props:['total'],
		data(){
			return{
				tabs:['all','active','completed'],
				tab:'all'
			}	
		},
		methods:{
			changeTab(tab){
				this.tab=tab
				this.$emit('changeTab',tab)
			},
			clear(){
				this.$emit('clear')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/theme.styl'
	.todo-info{
		padding 5px 10px
		display flex
		justify-content space-between
		font-size 16px
		font-weight 400
		border-top 1px solid rgba(0,0,0,.1)
		.total{
			color $red
		}
		.tabs{
			width 200px
			display flex
			justify-content space-between
			a{
				padding 0 5px
				border 1px solid $lightred
				border-radius 5px
				&.actived{
					background-color $lightred
					color #fff
				}
			}
		}
		.clear{
			padding 0 5px
			appearance none
			border none
			outline none
			color #fff
			background-color $green
			border-radius 5px
			cursor pointer
		}
	}
</style>
