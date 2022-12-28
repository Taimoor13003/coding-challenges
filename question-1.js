const array = ["cook", "save", "taste", "aves", "vase", "state", "map"];

class mainClass {
  constructor(array) {
    this.data = [...array];
  }

  solution() {
    let sortedArrayofObject = [];

    for (let i = 0; i < this.data.length; i++) {
        const element = this.data[i];
        sortedArrayofObject.push(this.sort(element))
    }

    return this.groupDuplicates(sortedArrayofObject)

    
}

groupDuplicates(arrayofObjects){

    const data = [...arrayofObjects]
    const answer = []

    for (let i = 0; i < data.length; i++) {
        // grab one
        const firstLetter = data[0]
        const sameWords = []

        for (let j = 0; j < data.length; j++) {
            // match with all
            if(firstLetter.newWord == data[j].newWord){
                sameWords.push(data[j].original)
                data.splice(j, 1)
                j = -1
                i = -1
            }
        }
        answer.push(sameWords)
    }
    return answer
}


  sort(str) {

    var arr = str.split('');
  var tmp;
  for(var i = 0; i < arr.length; i++){
    for(var j = i + 1; j < arr.length; j++){
      /* if ASCII code greater then swap the elements position*/
      if(arr[i] > arr[j]){
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return {newWord : arr.join('') , original : str };


}

}

const process = new mainClass(array);

const answer = process.solution();
console.log(answer)


