let createIssueBtn = document.getElementById('issue-btn')
let form = document.getElementById('form-container')

form.style.display = "none"
createIssueBtn.addEventListener('click', function () {
    form.style.display = 'block'
})
let submitIssueBtn = document.getElementById('create-new-issue')


submitIssueBtn.addEventListener('click', function (e) {
    let div = document.createElement('div')
    let h2 = document.createElement('h2')
    let p = document.createElement('p')
    let span = document.createElement('span')
  let division = document.createElement('div')
    let inputs = document.querySelectorAll('input')
    let textarea = document.querySelector('#description').value
    p.className = "content"
    span.className = "user"
    let date = new Date()
   h2.innerText = inputs[0].value
    span.innerText = "-by "+inputs[1].value
   p.innerText = textarea
   div.appendChild(h2)
   div.appendChild(p)
   div.appendChild(span)
division.className = "date"
    division.innerText = date.toDateString()
div.appendChild(division)
   document.body.appendChild(div).className = "issues"
   inputs[0].value = ''
   inputs[1].value = ''
    document.querySelector('#description').value = ''
    form.style.display = 'none'
   e.preventDefault()

})
let close = document.querySelector('#close')
close.addEventListener('click',function(){
    form.style.display = 'none'
})
