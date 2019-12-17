function addEvent(parent, evt, selector, handler) {
	parent.addEventListener(evt, function(event) {
		if (event.target.matches(selector + ', ' + selector + ' *')) {
		handler.apply(event.target.closest(selector), arguments);
		}
	}, false);
}

const addTask = ({counter, list}, message) => (
  {
    counter: counter + 1,
    list: [ ...list, {id: counter, message, checked: false, important: false}]
  }
)

const removeItem = ({list, counter}, itemId) => {
	const index = list.findIndex(({id}) => id == itemId)

	return {
		list: [...list.slice(0, index), ...list.slice(index+1)],
		counter: counter
	}
}

const changeItemById = ({list, counter}, id, collback) => (
  {
		list: list.map(item =>
			item['id'] == id ? collback(item) : item
		),
		counter: counter
	}
)

const toggleItem = (todoObj, id) =>
	changeItemById(todoObj, id, ({message, checked, important}) => {
	  return { id, message, checked: !checked, important }
	})

const toggleImportantItem = (todoObj, id) =>
	changeItemById(todoObj, id, ({message, checked, important}) => {
	  return {id, message, checked, important: !important}
	})



const saveTODO = todoObj => {
	localStorage.setItem('todo', JSON.stringify(todoObj))
	return todoObj
}

const getTODO = () => (JSON.parse(localStorage.getItem('todo')) || {counter: 0, list: []})

const initTodoListHTML = (selector, title) => {
	document.querySelector(selector).innerHTML = `
		<h1>${title}</h1>
		<div class="create_new_todo">
			<input type="text" class="message" placeholder="Описание">
			<button class="add">Добавить</button>
		</div>

		<div class="wrapper">
			<ul class="todo"></ul>
		</div>
	`

	const $todoList = document.querySelector(`${selector} .todo`)
	render($todoList, getTODO());

	const inputBox = document.querySelector('.message')
	const addButton = document.querySelector('.add')

	addButton.addEventListener('click', event => {
    const newTodoObj = addTask(getTODO(), inputBox.value)
    
    render($todoList, newTodoObj)
    saveTODO(newTodoObj)
    inputBox.value = ''
	})

	addEvent($todoList, 'click', '.checked', ({target: {dataset: {id}}}) => {
		const newTodoObj = toggleItem(getTODO(), id)
    render($todoList, newTodoObj)
    saveTODO(newTodoObj)
	})

	addEvent($todoList, 'contextmenu', 'li', event => {
		event.preventDefault();

		const {target: {dataset: {id}}} = event;

		const newTodoObj = toggleImportantItem(getTODO(), id)
    
    render($todoList, newTodoObj)
    saveTODO(newTodoObj)
	})

	addEvent($todoList, 'click', '.delete', ({target: {dataset: {id}}}) => {
		const newTodoObj = removeItem(getTODO(), id)
    
    render($todoList, newTodoObj)
    saveTODO(newTodoObj)
	})
}

const render = (elem, {list}) => {
	elem.innerHTML = list.reduce(($list, {id, message, checked, important}) => `
		${$list}
		<li data-id="${id}">
			<input class="checked" type = "checkbox"  data-id="${id}" id="item_${id}" ${checked ? 'checked' :''}>
			<label for = "item_${id}" class="${important ? 'important' : ''}">${message}</label>
			<span class="delete" data-id="${id}">X<span>
		</li>
	`, "")
}

