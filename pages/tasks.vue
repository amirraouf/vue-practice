<template>
<section class="container">
	<div class="grid-container">
		<ul class="grid-item">
			<li v-for="(task,i) in tasks" :key="task" class="grid-container">
				<div class="grid-item">{{task}}</div>
				<div class="grid-item"><button @click="remove(i)">Remove it</button></div>
			</li>
		</ul>
		<form class="grid-item" @submit.prevent="addTask">

			<input type="text" name="task" placeholder="task" v-model="temp">

		</form>
	</div>
</section> 
</template>

<script>

export default {
	data(){
		return {
			tasks: [
				'task1',
				'task2',
				'task3',
			],
			temp:''
		}
	},
	methods: {
		addTask(){
			this.tasks.push(this.temp);
			this.temp = '';
		},
		remove(i){
			i++;
			this.tasks=this.tasks.slice(0, i-1).concat(this.tasks.slice(i, this.tasks.length))
		}
	}
}

</script>

<style>
.grid-container {
		display:grid; 
		grid-column-gap: 50px;
	}
	.grid-item {
		grid-row:2/5;
	}
</style>