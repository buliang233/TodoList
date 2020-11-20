<template>
	<div class="main-todo">
		<input type="text" class="add-todo" placeholder="what to do" autofocus v-model="content" @keyup.enter="addTodo">
		<TodoItem v-for="(item,index) in filterData" :key="index" :todo="item" @del="deleteItem"></TodoItem>
		<TodoInfo :total="total" @changeTab="changeTab" @clear="clearAll"></TodoInfo>
	</div>
	
</template>

<script>
	import TodoItem from './coms/TodoItem.vue'
	import TodoInfo from './coms/TodoInfo.vue'
	let id=0
	export default{
		
		data(){
			return{
				todoData:[],
				content:'',
				total:0,
				tab:'all'
			}
		},
		components:{
			TodoItem,
			TodoInfo
		},
		computed:{
			filterData(){
				switch(this.tab){
					case 'all':
						return this.todoData
						break
					case 'active':
						return this.todoData.filter(item=>item.completed==false)
						break
					case 'completed':
						return this.todoData.filter(item=>item.completed==true)
				}
			}
		},
		methods:{
			addTodo(){
				if(this.content=='') return
				this.todoData.unshift({
					id:id++,
					content:this.content,
					completed:false
				})
				this.content=''
				// console.log(this.todoData)
			},
			deleteItem(id){
				this.todoData.splice(this.todoData.findIndex(item=>item.id===id),1)
			},
			changeTab(tab){
				this.tab=tab
			},
			clearAll(){
				this.todoData=this.todoData.filter(item=>item.completed==false)
			}
		},
		watch:{
			todoData: {
			    deep: true,
			    handler() {
			      this.total = this.todoData.filter(
			        item => item.completed == false
			      ).length
			    }
			  }
		}
		
	}
</script>

<style lang="stylus" scoped>
	.main-todo{
		margin 0 auto
		width 600px
		background-color #fff
		box-shadow 0 0 5px #666
		.add-todo{
			padding 12px 16px
			width 100%
			font-size 24px
			font-weight inherit
			font-family inherit
			border none
			outline none
			color inherit
			box-sizing border-box
		}
		
	}
</style>
