const STATUSES = {
  TO_DO: 'To Do',
  IN_PROGRESS: 'In Progress',
  DONE: 'Done'
}

const PRIORITIES = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High'
}

function isValidTask(task) {
  return list.find( item => item.name === task)
}

function isValidStatus(status) {
  return status === STATUSES.TO_DO || status === STATUSES.IN_PROGRESS || status === STATUSES.DONE;
}

function isValidPriority(priority) {
  return priority === PRIORITIES.LOW || priority === PRIORITIES.MEDIUM || priority === PRIORITIES.HIGH;
}

function getTask(task) {
  return task.find(item => item.name === task)
}


const list = [
  {name: 'read the book', status: STATUSES.TO_DO, priority: PRIORITIES.LOW},
  {name: 'create a practice task', status: STATUSES.TO_DO, priority: PRIORITIES.LOW},
  {name: 'do the housework', status: STATUSES.TO_DO, priority: PRIORITIES.HIGH},
  {name: 'make a bed', status: STATUSES.TO_DO, priority: PRIORITIES.LOW},
  {name: 'write a post', status: STATUSES.TO_DO, priority: PRIORITIES.HIGH},
  {name: 'do the Strada', status: STATUSES.IN_PROGRESS, priority: PRIORITIES.LOW},
]


function changePriority(task, priority) {
  if(isValidTask(task) && isValidPriority(priority)) {
    getTask(task).priority = priority;
  }

}

function changeStatus(task, status) {
  if(isValidTask(task) && isValidStatus(status)) {
    getTask(task).status = status;
  }

}

function deleteTask(task) {
  if (isValidTask(task)) {
    list.splice([list.findIndex( item => item.name === task)], 1);
  } else {
    console.log('There\'s no such task.')
  }
}

function addTask(task, status = STATUSES.TO_DO, priority = PRIORITIES.LOW) {
  if(isValidTask(task)) {
    alert('This task already was created')
  } else {
    list.push({name: task, status, priority})
  }
}

function showList() {
  let res = '';

  const todo = showTask(STATUSES.TO_DO, list);
  const inProgress = showTask(STATUSES.IN_PROGRESS, list);
  const done = showTask(STATUSES.DONE, list)

  res = todo + inProgress + done;

  return res
}

function showTask(status, list) {
  let res = `${status}:\n`,
      isEmptyTask = true,
      emptyTaskMessage = `${status}\n\tTasks are not found\n`,
      filteredList = list.filter( task => task.status.toLowerCase() === status.toLowerCase() );

      if(!filteredList.length) return emptyTaskMessage;

      isEmptyTask = false;
      for(let task of filteredList) {
          res += '\t' + task.name + '\n';
      }

      return res;
}

console.log(showList())