<template>
	<div class="grid-container">
		<a @click="back"> &lt; Back </a>
		<form @submit.prevent="calculate" class="grid-item">
			<h3>Calculate your decreasing loan</h3>
			<br>
			<input class="input is-rounded" step="0.1" min=0 type="number" name="salary" placeholder="Salary" v-model="salary">
			<br><br>
			<input class="input is-rounded" step="0.1" min=0 type="number" name="interest" placeholder="Interest" v-model="interest">
			<br><br>
			<input class="input is-rounded" step="0.1" min=0 type="number" name="loan" placeholder="Loan" v-model="loan">
			<br><br>

			<input type="submit" class="submit" name="Calculate" value="Calculate">
		</form>
		<p id="result" class="grid-item"></p>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				interest: null,
				salary: null,
				loan: null,
				yearly_payment:0,
				total_interest:0
			}
		},
		methods: {
			calculate(e, i=1, result=''){
				this.yearly_payment = this.salary*0.4*12;

				let yearly_interest = (this.loan * this.interest)/100;
				this.total_interest += yearly_interest;
				let roundedString = yearly_interest.toFixed(2);
				yearly_interest = Number(roundedString);
				result = document.querySelector("#result");
				if (i===1){
					result.innerHTML = `The yearly payment will be ${this.yearly_payment} <br>`
				}
				result.innerHTML += `<br>The year no. <b>${i}</b>: Interest: ${yearly_interest} + Loan amount: ${this.loan}`;

				this.loan = Number(this.loan) + Number(yearly_interest);
				roundedString = this.loan.toFixed(2);
				this.loan = Number(roundedString);
				if ((this.loan - this.yearly_payment) < 0 && this.loan > 0){
					let no_of_months = this.loan / (this.salary*0.4);
					no_of_months = no_of_months.toFixed(0);
					result.innerHTML += `<br><b>NOW</b> you are about to finish`;
					result.innerHTML += `<br>You will have remaining ${no_of_months} months`;
					result.innerHTML += `<br>GOOD LUCK!!!!`;
					result.innerHTML += `<br>`;
					result.innerHTML += `Loan will be ${this.loan}`;
					result.innerHTML += `<br>`;
					result.innerHTML += `Total Interest: ${this.total_interest}`;

				}
				
				
				this.loan -= this.yearly_payment;

				(this.loan <= 0) ? this.reset() : this.calculate(e, ++i, result);
			},
			reset(){
				this.interest= null,
				this.salary= null,
				this.loan= null,
				this.yearly_payment= 0
			},
			back(){
				result = document.querySelector("#result");
				result.innerHTML = ``;
				this.$emit('back');
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