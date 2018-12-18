// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header_show:true, //显示主标题
    remark_show:true,
    remark_style:'userdefined',
    speciallist: [],
    weekheight:150,
    txt_style:'color:#666666'
  },

  selectDate:function(e){
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      speciallist: [
        { date: '2018-12-02', background: 'yellow', text: '文字1', color: '' },
        { date: '2018-12-05', background: 'red', text: '文字2' },
        { date: '2018-12-11', background: 'bule', text: '文字' },
        { date: '2018-12-12', background: 'orange', text: '文字' },
        { date: '2018-12-06', background: 'white', text: '文字' },
      ],
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})