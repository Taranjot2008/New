const stars = document.querySelectorAll('.stars i');
let output = document.getElementById('output');

stars.forEach((star, index1) => {

    star.addEventListener('click', () => {

        stars.forEach((star, index2) => {

            index1>= index2 ? star.classList.add("active"):star.classList.remove("active")
        });

        let rating = (index1+1);

        output.innerText = 'Rating:'+rating+'/5';
    });
});


