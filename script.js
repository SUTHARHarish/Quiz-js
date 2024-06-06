const question = [
    {
        'que':'  Which  of the Follwing is a markup languges?',
        'a' : 'Html',
        'b' : 'Css',
        'c' : 'PHP',
        'd' : 'Java',
        'correct' : 'a'
    },
    {
        'que':'  Which of the following tag is used to insert a line-break in HTML?',
        'a' : '<a>',
        'b' : '<br>',
        'c' : '<pre>',
        'd' : '<b>',
        'correct' : 'b'
    }, 
    {
        'que':'  How to insert an image in HTML?',
        'a' : '<img href = "jtp.png" />',
        'b' : '<img url = "jtp.png" />',
        'c' : '<img link = "jtp.png" />',
        'd' : '<img src = "jtp.png" />',
        'correct' : 'd'
    }
]
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox");
const optionsInputs = document.querySelectorAll(".options")
const loaderQ = () =>{
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = question[index]
    quesBox.innerHTML = `${index+1})${data.que}`;
    optionsInputs[0].nextElementSibling.innerText = data.a
    optionsInputs[1].nextElementSibling.innerText = data.b
    optionsInputs[2].nextElementSibling.innerText = data.c
    optionsInputs[3].nextElementSibling.innerText = data.d
}


const submitQuiz = () =>{
    const data = question[index]
    const ans = getAnswer()
    // console.log(ans ,data.correct);
    if(ans == data.correct){
        right++;
    }else{
        wrong--;
    }
    index++;
    loaderQ();
    return;
}

const getAnswer = () => {
    let answer;
    optionsInputs.forEach(
        (input) => {
            if(input.checked){
                // console.log(input.value);
               answer = input.value;
            //    break;
            }
        }
    )
    return answer;
}

const reset = () =>
    {
        optionsInputs.forEach(
            (input) => {
                input.checked = false;
            }
        )
    }

    const endQuiz = () => {
        document.getElementById('box').innerHTML = `
        <div style="text-align:center">
            <h3> Thank You for Playing The Quiz </h3>
            <h2> ${right} / ${total} are correct </h2>
        </div>`;
    };
    
loaderQ();




