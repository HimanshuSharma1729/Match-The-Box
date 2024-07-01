let mainDiv = document.querySelector('.main')
let start = document.querySelector('.button')
let mainArray = [32, 15, 34, 12, 12, 34, 21, 1, 2, 3, 4, 5, 5, 6, 7, 8, 2, 3, 5, 4, 6, 1, 8, 7]
// console.log(start)
start.addEventListener('click', () => {


    start.remove();
    mainArray.forEach(element => {
        mainDiv.innerHTML += `<div class="outer square${element}">
  <div class="card">
  <div class="front"></div>
  <div class="back">${element}</div>
</div>
</div>`
    })


    //logic for matching

    let squares = document.querySelectorAll(".outer")
    let Carry = []
    let removedElement;
    squares.forEach(square => {
        square.addEventListener('click', (e) => {

            e.target.parentNode.classList.add('ghumja')


            Carry.push(e.target.parentNode.parentNode)
            console.log(Carry);
            if (Carry.length == 2) {
                // Carry[1].children[0].classList.add('ramesh')
                console.log(Carry[0].classList[1], Carry[1].classList[1]);
                if (Carry[0].classList[1] != Carry[1].classList[1]) {

                    //     // console.log(Carry[0],Carry[1]);
                    setTimeout(

                        function () {

                            Carry[1].children[0].classList.toggle('ghumja')
                            // console.log(Carry[0].children, Carry[1].children);
                            Carry[0].children[0].classList.toggle('ghumja')
                            Carry=[]
                        }, 1000
                    )



                    // Carry[0].children.classList.toggle('ghumja')

                }
                else{
                    setTimeout(()=>{

                        Carry[0].style.visibility="hidden"
                        Carry[1].style.visibility="hidden"
                        Carry=[]
                    },500)
                }




            }


        })
    })

})

