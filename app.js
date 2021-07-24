// Variables
const  msg = document.querySelector('.msg')
const guess = document.querySelector('input')
const btn = document.querySelector('.btn')

let play = false;
let newWords = "";
let randonWords = "";
let ProlangWords = ['Python','ReactJS', 'ReactNative','Ruby','Java','C++']


const CreateNewWords = () =>{
    let randomeNum = Math.floor(Math.random() * ProlangWords.length);
    // console.log(randomeNum)
    let newTempWord = ProlangWords[randomeNum]
    // console.log(newTempWord.split(''))
    return newTempWord
    
}

// Creating Scrumble Words
const scrumbleWords = (arr) => {
    for (let i =  arr.length -1 ;  i>0; i--){
        let temp = arr[i];
        // console.log(temp)

        //Generating random number for i
        let j = Math.floor(Math.random()*(i+1));
        // console.log(i)
        // console.log(j)

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr; 
}

btn.addEventListener('click', function () {
  if(!play) {
      play= true;
      btn.innerHTML= "Guess";
      guess.classList.toggle('hidden');
      newWords = CreateNewWords();
      randonWords = scrumbleWords(newWords.split("")).join("");
      
      //show random Words
      msg.innerHTML = ` Guess The word ${randonWords}`
        console.log(randonWords)
  }   
  else{
      let tempWord = guess.value;
      if(tempWord === newWords){
        //   console.log('correct')
        play = false;
        msg.innerHTML =  `Awesome!! Its correct answer. ${newWords}`;
        btn.innerHTML = "Start Again";  
        guess.classList.toggle('hidden');  
        guess.value = " " ;
        
      }else{
        msg.innerHTML =  `Soory Boss!! Its incorrect. Plz try again. ${newWords}`;
      }
  }  
})

