class RandomHelper {

static generateTaskName(){
  const firstTask = `Новая задача № ${Math.floor(Math.random() * 10000)}{enter}`
  const secondTask = `Новая задача № ${Math.floor(Math.random() * 10000)}{enter}`
  const thirdTask = `Новая задача № ${Math.floor(Math.random() * 10000)}{enter}`
  const fourTask = `Новая задача № ${Math.floor(Math.random() * 10000)}{enter}`
  const fiveTask = `Новая задача № ${Math.floor(Math.random() * 10000)}{enter}`

return {
  firstTask,
  secondTask,
  thirdTask,
  fourTask,
  fiveTask
  }
}
}

export default RandomHelper