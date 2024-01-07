import RandomHelper from "./generateRandom.cy"
import Locators from "./locators.cy"

const taskName = RandomHelper.generateTaskName()

class CreateTaskPage{

goToWebSite(){
    return cy.visit(Locators.site)
}

newTaskIsVisible(task){
    return cy.get(Locators.searchField).type(taskName.firstTask).should('be.visible')
}

createNewTask(task){
    return cy.get(Locators.searchField).type(taskName.firstTask)
}

createSecondTask(task){
    return cy.get(Locators.searchField).type(taskName.secondTask)
}

createThirdTask(task){
    return cy.get(Locators.searchField).type(taskName.thirdTask)
}

createFourTask(task){
    return cy.get(Locators.searchField).type(taskName.fourTask)
}

clickDoneBtn(){
    return cy.get(Locators.doneButton).click()
}

clickActiveBtn(){
    return cy.contains("Active").click()
}

clickCompletedBtn(){
    return cy.contains("Completed").click()
}

firstTaskNotExist(){
    return cy.contains("FirstTask").should('not.exist')
}

firstTaskIsVisible(){
    return cy.contains("Clear completed").should('be.visible')
}

allActiveTasksIsVisible(){
    return cy.contains("3 items left").should('be.visible')
}

clickDeleteBtn(){
    return cy.get(Locators.deleteButton).invoke('show').click()
}

verifyTaskDone(){
    return cy.contains("0 items left")
}
}

export default CreateTaskPage