export const state = () => ({
  tasks: []
})

export const mutations = {
  init(state) {
    state.tasks = [
      {id: 1, item: 'create skeleton of todo', done: true},
      {id: 2, item: 'add ability to add tasks', done: true},
      {id: 3, item: 'clear task name after clicking "Add"', done: false},
      {id: 4, item: 'put "Add" button in one line with input', done: false},
      {id: 5, item: 'add new task by hitting Enter instead of clicking "Add"', done: false},
      {id: 6, item: 'replace <input> with <ui-checkbox> in tasks list', done: false},
      {id: 7, item: 'when task is complete cross it out', done: false},
      {id: 8, item: 'split tasks into "pending" and "complete" tabs using keen-ui component <ui-tabs>', done: false},
      {id: 9, item: 'don\'t allow to add empty tasks', done: false},
      {id: 10, item: 'make list of tasks scrollable, if there\'re are a lot of tasks', done: false},
      {id: 11, item: 'extract list item into a separate vue.js component', done: false},
      {id: 12, item: 'persist tasks list in a local storage', done: false},
      {id: 13, item: 'add animation on task completion', done: false}
    ]
  },
  save(state) {
    localStorage.setItem('_tasks_', JSON.stringify(state.tasks))
  },
  add(state, { item }) {
    let id, flag = true
    while (flag) {
      id = Math.floor(Math.random() * Math.pow(10,6))
      flag = !!state.tasks.find(task => task.id === id)
    }
    state.tasks.push({
      id, item, done: false
    })
  },
  remove(state, id) {
    state.tasks = state.tasks.filter(task => task.id !== id)
  },
  done(state, {id, done = true}) {
    state.tasks = state.tasks.map((task) => {
      if (task.id === id) task.done = done
      return task
    })
  },
}

export const actions = {
  init(context) {
    context.commit('init')
  },
  add(context, { item }) {
    context.commit('add', { item })
    context.commit('save')
  },
  remove(context, id) {
    context.commit('remove', parseInt(id))
    context.commit('save')
  },
  done(context, {id, done = true}) {
    context.commit('done', {id: parseInt(id), done})
    context.commit('save')
  },
}

export const getters = {
  tasks: (state) => {
    return state.tasks
  },
  doneTasks: (state) => {
    return state.tasks.filter(task => task.done === true)
  },
  pendingTasks: (state) => {
    return state.tasks.filter(task => task.done === false)
  },
  task: (state) => (id) => {
    return state.tasks.find(task => task.id === id)
  },
}
