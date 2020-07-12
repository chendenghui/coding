function a(word1,word2){
    word1=word1.split('');
    word2=word2.split('');
    word1.forEach((item)=>{
        if(!word2.length)return false;
        if(word2.indexOf(item)==-1)return false;
        if(word2.indexOf(item)>-1){
            word1.shift();
            word2.splice(word2.indexOf(item),1);
            console.log(word1,word2)
        }
    })
    if(word2.length){
        return false
    }else{
        return true
    };
}
console.log(a('cat','act'))