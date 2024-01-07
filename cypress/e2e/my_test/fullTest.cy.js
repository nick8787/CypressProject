import CreateTaskPage from "../page_object/create_task_page.cy"

const createTaskPage = new CreateTaskPage()

beforeEach(() => { createTaskPage.goToWebSite()})

describe('TEST 1', () => {
  it('Test isVisible', () => {
    createTaskPage.newTaskIsVisible()
  })
})

describe('TEST 2', () => {
  it('Task complete and it`s visible', () => {
    createTaskPage.createNewTask()
    createTaskPage.clickDoneBtn()
    createTaskPage.verifyTaskDone()
  })
})

describe('TEST 3', () => {
  it('Task delete and it`s not exist', () => {
    createTaskPage.createNewTask()
    createTaskPage.clickDeleteBtn()
    createTaskPage.firstTaskNotExist()
  })
})

describe('TEST 4', () => {  
  it('Task filters', () => {
    createTaskPage
    .createNewTask()
    .clickDoneBtn()
    .createSecondTask()
    .createThirdTask()
    .createFourTask()
    .clickCompletedBtn()
    .firstTaskIsVisible()
    .clickActiveBtn()
    .allActiveTasksIsVisible()
  })
})