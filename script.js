console.log("Is this Script Working?")

let question = document.querySelectorAll(".faq");

question.forEach(item => {
    let icon = item.querySelector(".icon");
    let ans = item.querySelector(".answer")
    item.addEventListener('click', () => {
        icon.classList.toggle('active')
        ans.classList.toggle('active')
    })
})