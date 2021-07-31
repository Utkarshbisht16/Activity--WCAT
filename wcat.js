    let path = require("path");
    let fs = require("fs");

    let inputarr= process.argv.slice(2);
    let sizeofinput = inputarr.length;

    let arrfilepath = [];
    let optionarr= [];
    let content = "";

    for(let i =0 ; i < sizeofinput ; i++){
      let firstchar = inputarr[i].charAt(0);
        if(firstchar== "-"){
           optionarr.push(inputarr[i]);

        }else{
            arrfilepath.push(inputarr[i]);
        }

    }
 
    for(let i =0 ; i < arrfilepath.length ; i++){
        let ans = fs.existsSync(arrfilepath[i]);
        if(ans == false){
            console.log("ERROR : file does not exist");
            return;
        }
    }

    for(let j =0 ; j < arrfilepath.length ; j++){
        content = content + fs.readFileSync(arrfilepath[j]) + "\n";
    }


    let contentarr = content.split("\n");


    let checkB = optionarr.includes("-b")
    let checkS = optionarr.includes("-s")
    let checkN = optionarr.includes("-n")

    
    // ********  implementation if nothing(i.e -s, -n, -b)  is passed  ********
        if(checkS == false && checkB == false && checkN == false){
              console.log(content);
        }
    // ********  implementation of only -S   ********
    
        if(checkS == true && checkB == false && checkN == false){
            for(let i = 1 ; i < contentarr.length; i++){
                if(contentarr[i]== "" && contentarr[i - 1]== ""){
                  contentarr[i] = null;
                }else if(contentarr[i] == "" && contentarr[i-1] == null){
                    contentarr[i] = null;
                }
            }

            let temparr = [];
             for(let i = 0; i < contentarr.length; i++){
                if(contentarr[i] !== null){
                    temparr.push(contentarr[i]);
                }
            }
             contentarr = temparr;
             console.log(contentarr.join("\n"));
        }

    // ********  implementation of only -N  ********
    
    if(checkS == false && checkB == false && checkN == true){
        let index = 1;
        for(let i = 0 ; i < contentarr.length - 1; i++){
             console.log(index + " " + contentarr[i]);
             index = index + 1;
        }

    }
     // ********  implementation of only -B  ********
    
       if(checkS == false && checkB == true && checkN == false){
            let index = 1;
             for(let i = 1 ; i < contentarr.length - 1; i++){
                if(contentarr[i]== ""){
                  contentarr[i] = null;
                }
            }
            for(let i = 0 ; i < contentarr.length - 1; i++){
                if(contentarr[i] !== null){
                    contentarr[i] = index + " " + contentarr[i]
                    index = index + 1;;
                }
            }
            console.log(contentarr.join("\n"));
        }
    // ********  implementation of  -s and -b  ********
    if(checkS == true && checkB == true && checkN == false){
        //logic of -s
            for(let i = 1 ; i < contentarr.length; i++){
                if(contentarr[i]== "" && contentarr[i - 1]== ""){
                  contentarr[i] = null;
                }else if(contentarr[i] == "" && contentarr[i-1] == null){
                    contentarr[i] = null;
                }
            }

            let temparr = [];
             for(let i = 0; i < contentarr.length; i++){
                if(contentarr[i] !== null){
                    temparr.push(contentarr[i]);
                }
            }
             contentarr = temparr;
        //logic of -b
             let index = 1;
             for(let i = 1 ; i < contentarr.length - 1; i++){
                if(contentarr[i]== ""){
                  contentarr[i] = null;
                }
            }
            for(let i = 0 ; i < contentarr.length - 1; i++){
                if(contentarr[i] !== null){
                    contentarr[i] = index + " " + contentarr[i]
                    index = index + 1;;
                }
            }
            console.log(contentarr.join("\n"));
        
    
    } 
    
    //// ********  implementation of  -s and -n  ********
    if(checkS == true && checkB == false && checkN == true){
        //logic of -s
        for(let i = 1 ; i < contentarr.length; i++){
            if(contentarr[i]== "" && contentarr[i - 1]== ""){
              contentarr[i] = null;
            }else if(contentarr[i] == "" && contentarr[i-1] == null){
                contentarr[i] = null;
            }
        }

            let temparr = [];
        for(let i = 0; i < contentarr.length; i++){
            if(contentarr[i] !== null){
                temparr.push(contentarr[i]);
            }
        }
         contentarr = temparr;
        //logic of -n
        let index = 1;
        for(let i = 0 ; i < contentarr.length - 1; i++){
             console.log(index + " " + contentarr[i]);
             index = index + 1;
        }
    }

     //// ********  implementation of  if all three(i.e -s -n -b) are passed  ********
     if(checkS == true && checkB == true && checkN == true){
        for(let i = 0 ; i < optionarr.length ;){
            if(optionarr[i] == "-n"){ //if -n is entered first so implementing -s and -n
                 
                for(let i = 1 ; i < contentarr.length; i++){
                    if(contentarr[i]== "" && contentarr[i - 1]== ""){
                      contentarr[i] = null;
                    }else if(contentarr[i] == "" && contentarr[i-1] == null){
                        contentarr[i] = null;
                    }
                }
        
                    let temparr = [];
                for(let i = 0; i < contentarr.length; i++){
                    if(contentarr[i] !== null){
                        temparr.push(contentarr[i]);
                    }
                }
                contentarr = temparr;
                //logic of -n
                let index = 1;
                for(let i = 0 ; i < contentarr.length - 1; i++){
                     console.log(index + " " + contentarr[i]);
                     index = index + 1;
                }
                break;

            }
            else if (optionarr[i] == "-b"){ //if -b is entered first so implementing -s and -b
                //logic of -s
                for(let i = 1 ; i < contentarr.length; i++){
                     if(contentarr[i]== "" && contentarr[i - 1]== ""){
                            contentarr[i] = null;
                    }else if(contentarr[i] == "" && contentarr[i-1] == null){
                        contentarr[i] = null;
                    }
                }

                let temparr = [];
                for(let i = 0; i < contentarr.length; i++){
                    if(contentarr[i] !== null){
                         temparr.push(contentarr[i]);
                    }
                 }
                 contentarr = temparr;
                //logic of -b
                let index = 1;
                for(let i = 1 ; i < contentarr.length - 1; i++){
                    if(contentarr[i]== ""){
                        contentarr[i] = null;
                    }
                }
                for(let i = 0 ; i < contentarr.length - 1; i++){
                    if(contentarr[i] !== null){
                        contentarr[i] = index + " " + contentarr[i]
                        index = index + 1;;
                    }
                }
                console.log(contentarr.join("\n"));
                break;
            }
            
            else{
                i++;
            }
        }


     }




