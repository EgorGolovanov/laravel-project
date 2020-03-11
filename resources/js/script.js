window.onload=function() {
    document.getElementById('editbutton').addEventListener('click', function(e) {
        let parent = e.target.parentNode;
        parent.classList.add('edit-mode');
    });
    
    document.getElementById('cancelbutton').addEventListener('click', function(e) {
        let parent = e.target.parentNode;
        parent.classList.remove('edit-mode');
    });

    //слушатель для обработки событий при выборе сортировки списка
    document.addEventListener("click", function(e) {
    	if (e.target && (e.target.matches("input[name='sort-radiobutton']"))) {
    		Sorting(e.target);
    	}
    });
}

//функция для сортировки ul списка, где fields - входное условие для выбора сортировки
function Sorting(fields) {
	let listUl = document.getElementById('list-item');
	let newList = Sort(fields);
	listUl.innerHTML = '';
	makeUl(newList);
}

//функция заполнения ul по входному массиву
function makeUl(array) {
    let list = document.getElementById('list-item'); 

    for (let i = 0; i < array.length; i++) {
        list.appendChild(array[i]);
    }

    return list;
}

//функция сортировки массива по id или value
function Sort(fields) {
    //let nodeList = document.querySelectorAll('li');
    let list = document.getElementById('list-item');
    let nodeList = list.children;
    let itemsArray = [];

    for (var i = 0; i < nodeList.length; i++) {    
        itemsArray.push(nodeList[i]);
    }

    itemsArray.sort(function(nodeA, nodeB) {
        //выбор нужнго поля для сортировки
        let textA = nodeA.querySelector('.' + fields.value).textContent;
        let textB = nodeB.querySelector('.' + fields.value).textContent;
        //проверка числовая или текстовая сортировка
        let A = parseInt(textA);
        let B = parseInt(textB);
		
		if (!A && B) B = textB;
		if (!B && A) A = textA;
        if (!A) A = textA;
        if (!B) B = textB;
        
        if (A < B) return -1;
        if (A > B) return 1;

        return 0;
    });

    if (fields.className.indexOf('asc') == -1) itemsArray.reverse();
    
    return itemsArray;
}
