uni.addInterceptor('request', {
  invoke(args) {
    args.url = 'http://localhost:8001/smart/'+args.url;
    let cookie = wx.getStorageSync('cookieKey');
    let token = wx.getStorageSync('token');
    console.log(token);
    args.header = {
      'token': token,
      'Cookie': cookie
    }
  },
  success(args) {
    console.log('success');
  }, 
  fail(err) {
    console.log('interceptor-fail',err)
  }, 
  complete(res) {
    console.log('interceptor-complete',res)
  }
})