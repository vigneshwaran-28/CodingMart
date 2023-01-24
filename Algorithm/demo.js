const readline=require("readline-sync");

let resArr=[];

let temp=0;

function getHashValue(str,j){
    let hashValue=0;
    if(j==0){
        for(let i=str.length-1;i>=0;i--){
            hashValue+=str.charCodeAt(i)*Math.pow(prime,i);
            if(i==str.length-1)
                temp=str.charCodeAt(i)*Math.pow(prime,i);
  //          console.log("has in : "+hashValue+" str.charCodeAt(i)*Math.pow(prime,i) "+` ${str.charCodeAt(i)} ${str.charAt(i)}`+str.charCodeAt(i)*Math.pow(prime,i));
        }
    }
    else{
        console.log(temp+" "+resArr[j-1]);
        hashValue=(resArr[j-1]-temp)*prime+str.charCodeAt(str.length-1);
        temp=str.charCodeAt(str.length-1)*Math.pow(prime,str.length-1);
    }
   
    return hashValue;
}

function generateArr(){
    
    for(let i=0;i<str.length;i++){
        resArr.push(getHashValue(str.substring(i,i+pattern.length),i));
    }

    for(let i=0;i<resArr.length;i++){
        if(resArr[i]==compareValue){
            console.log("Element found at : "+i);
        }
    }

}


let str=readline.question("Enter the String : ");

let pattern=readline.question("Enter the Pattern : ");

let prime=3;

let compareValue=getHashValue(pattern,0);


generateArr();

console.log(compareValue+" "+resArr);

