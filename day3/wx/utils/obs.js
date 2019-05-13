const bus = {
  // 队列
  queue: [],
  // 监听 往数组队列里面添加事件队列
  $on(eventName, callback) {
    this.queue.push({
      eventName,
      callback
    })
  },
  // 触发  获取事件队列里面的事件，然后执行
  $emit(eventName, data) {
    for (let q in this.queue) {
      // 如果两个事件匹配的话，则把回调函数取出来执行
      if (this.queue[q].eventName === eventName) {
        (this.queue[q].callback)(data);
      }
    }
  }
}
module.exports = bus;