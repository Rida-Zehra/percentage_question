function grades(percentage : number) {
    if (percentage >=80 && percentage <= 100 ){
        console.log("you got grade A+");
    }
else if(percentage>= 70 && percentage <= 79 ){
    console.log("you got grade A");
    } 
else if(percentage >= 60 && percentage <= 69 ){
    console.log("you got grade B");
    }    
else if(percentage >= 50 && percentage <= 59 ){
    console.log("you got grade C");
    }       
else if(percentage >= 40  && percentage <= 49 ){
    console.log("you got grade D ");
    }    
else{
    console.log("you are fail");
    }
}          
    grades(20)
