let textBox = document.getElementById("textBox");

    textBox.addEventListener("input",function(){
        let text = this.value;
        console.log(text)
        let char = text.length;
        document.getElementById("char").innerHTML = char;
      
        text = text.trim();
        let word = text.split(" ");//it breaks string and makes string out of it
        let cleanList = word.filter(function(elm){
            return elm != "";
        })
        console.log(cleanList);  
        document.getElementById("word").innerHTML = cleanList.length;
    })