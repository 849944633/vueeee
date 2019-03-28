<template>
	<div class="hello">
		<ul>
			<li>
				<router-link to='/?tab=all'>全部</router-link>
			</li>
			<li>
				<router-link to='/?tab=good'>精华</router-link>
			</li>
			<li>
				<router-link to='/?tab=share'>分享</router-link>
			</li>
			<li>
				<router-link to='/?tab=ask'>问答</router-link>
			</li>
			<li>
				<router-link to='/?tab=job'>招聘</router-link>
			</li>
			<li>
				<router-link to='/?tab=dev'>客户端测试</router-link>
			</li>
		</ul>
		<!-- <list v-for='(item,index)in listlist' :key='index' :data='item'></list> -->
		<list v-for="(item,index) in listlist" :key="index" :data="item"></list>
	</div>
</template>

<script>
	import Axios from 'axios'
	import list from './list'
	export default {
		data() {
			return {
				listlist: [],
				flag: 'all'
			}
		},
		created() {
			let tab = this.$route.query
			this.flag = tab.tab
			Axios.get('https://cnodejs.org/api/v1/topics', {
				params: {
					tab: this.flag
				}
			}).then(res => {
				this.listlist = res.data.data
			})
		},
		watch: {
			$route() {
				let tab = this.$route.query
				this.flag = tab.tab
				Axios.get(`https://cnodejs.org/api/v1/topics`, {
					params: {
						tab: this.flag
					}
				}).then(res => {

					this.listlist = res.data.data

				})
			}
		},
		components: {
			list
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
