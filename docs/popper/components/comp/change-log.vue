<template>

	<div>

		<h2>
			更新日志
		</h2>

		<v-card class="mt20">
			<div slot="header">
				<div class="header-content">
					<h3 class="dib fz20 m0">v1.0.0</h3>
					<span class="dib">
                        2019-04-26
                    </span>
				</div>
			</div>
			<div>
				<h4 class="fz18 mt0">开发</h4>
				完成popper开发
			</div>
		</v-card>

	</div>
</template>
<script>

	export default {

		name: 'change-log',
	}
</script>

<style scoped>

	h4 {
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.fz20 {
		font-size: 20px;
	}

	.fz18 {
		font-size: 18px;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

</style>


