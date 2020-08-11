const BASEURL = 'http://157.122.54.189:9088'
export const myRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASEURL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if (res.data.status !== 0) {
					return uni.showToast({
						title: '数据请求成功'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title: '数据请求失败'
				})
				reject(err)
			},

		})
	})
}
