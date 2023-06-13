console.log('connected')

// what is DOM?
// document Object Model
// document: document is nothing whole Html file
// object: dot notation
// Model: tree
// access: manipulate

// access or select | by tagname,idname,classname

// access or select | tagname
// console.log(document.getElementsByTagName('h3')[0] )

// access or select | class
// console.log(document.getElementsByClassName('info')[0])

// access or select | id
// console.log(document.getElementById('info1'))

// access or select | querySelector 
// {only takes first element with respective }
// class (.) and id (#) in querySelector


// access or select | quertSelectorAll
// {we can select all elements with respectiv selector}
// class (.) and id (#) in querySelectorAll


// to modify anything in html by javascript
// document.getElementsByClassName('info').innerText=""



const element = document.getElementsByClassName('element')[0];
const button = document.getElementsByClassName('btn')[0];

button.addEventListener('click', function(){
    if(element.innerText==""){
        element.innerText='javascript is awesome'
    }else{
        element.innerText=''
    }
    console.log('clicked')    
})