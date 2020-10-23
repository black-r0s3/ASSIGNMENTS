const task3Element = document.getElementById('task-3');

function firstFunction(){
    alert('Hello Nana');
}

function secondFunction(name){
    alert(name);
}


secondFunction('Dorcas');

function thirdFunction(first, second, third){
    alert(first + second + third);
}


task3Element.addEventListener('click', firstFunction);


thirdFunction('My name is ', 'Osei Tutu ', 'of Ashanti Region ')