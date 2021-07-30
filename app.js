const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)
item.classList.add('default')

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)

}

function dragstart(event) {
    event.target.classList.add('hold')
    item.classList.remove('default')
    setTimeout(() => event.target.classList.add('hidden'), 0)
}

function dragend(event) {
    event.target.classList.remove('hold', 'hidden')
}

function dragover(event) {
    event.preventDefault()
    
    
}

function dragenter(event) {
    event.target.classList.add('hovered')
    if (event.target.className == 'placeholder 0 hovered') {
        event.target.classList.add('red')

    }
    if (event.target.className == 'placeholder 1 hovered') {
        event.target.classList.add('yellow')

    }
    if (event.target.className == 'placeholder 2 hovered') {
        event.target.classList.add('green')

    }
}

function dragleave(event) {
    event.target.classList.remove('hovered', 'yellow', 'green', 'red')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}



