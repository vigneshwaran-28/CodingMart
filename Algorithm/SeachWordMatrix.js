// let arr=[['C','O','D','K','X','T'],[][][][][]]

let arr=[[]];

let str="CODINGMART";

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
       let left,right,top,down;
       left=j-1,right=j+1,top=i+1,down=i-1,k=j,l=i,pos=0;

       if(arr[l][k]==str.charAt(pos)){

        let c=0;

            while(true){
        
                if(left>=0 && arr[l][left]==str.charAt(pos+1)){
                    left--;
                    c++;
                    // l+=1;
                    // top=l+1;
                    // down=
                }
                else if(right<arr.length && arr[l][right]==str.charAt(pos+1)){
                    

                }
                else if(top>=0 && arr[top][k]==str.charAt(pos+1)){
            
                }
                else if(down<arr.length && arr[down][k]==str.charAt(pos+1)){
            
                }
            }
        }

    }
}


