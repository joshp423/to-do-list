import { localStorageFunctions } from "./localStorageFunctions";


let initialProjects = [];
let initialToDos = [];
let existingcheck = 0;

const initialObject = localStorageFunctions.intialiseDefault(initialProjects, initialToDos, existingcheck)

console.log(initialObject)
export const existing = initialObject.existingcheck;
export let userProjects = initialObject.intitialProjects;
export let userToDos = initialObject.initialToDos;