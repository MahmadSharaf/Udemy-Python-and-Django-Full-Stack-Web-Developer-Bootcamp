
var allTh = document.querySelectorAll("th")
var btn = document.querySelector("a")


btn.addEventListener('click',function () {
    for (var aTh of allTh){
        aTh.textContent = ""
      }
})

for (var aTh of allTh){
    aTh.addEventListener('click',function () {
        if (this.textContent == '') {
            this.textContent = 'X'
        }else if (this.textContent == 'X') {
            this.textContent = 'O'
        }else{
            this.textContent = ''
        }
    })
}