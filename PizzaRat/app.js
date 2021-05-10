function getData(){
let borough = event.target.innerHTML.toUpperCase();

let limit = document.getElementById("complaints").value;
fetch("https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough="+borough+"&$limit="+limit)
.then((data)=>data.json()) //converts json into js object and returning that data
.then((formattedData)=>displayData(formattedData)) //
}




function displayData(data) {
    removeData();
    

    console.log(data)
    for (let i in data){
        let div = document.getElementById("d1")
        //descriptor + resolution description
        
        let node = document.createElement("p")
        let node2 = document.createElement("p")
        let desc = data[i].descriptor
        let resDesc = data[i].resolution_description
        let btn = document.createElement("button")
        btn.innerHTML = "Response"
        let click = document.createAttribute("onclick")
        click.value = "newFunction()"
        //added click function to btn
        btn.setAttributeNode(click)
        /*connecting created node from p tag with data descriptor
        so that when you click it will show on page*/
        node.innerHTML = desc
        node2.innerHTML = resDesc

        d1.append(node)
        d1.append(btn)
        d1.append(node2)
        
        node2.hidden=true
    }




    }

    function newFunction(){
        x=event.target.nextSibling
        if(x.hidden == true){
            x.hidden = false
        }else{
            x.hidden = true
        }

    }
    //show only 10 every time you click a different borough

    function removeData (){
        let limit = document.getElementById("complaints").value;
        let div = document.getElementById("d1");
        //refers to all the children inside the div
        let newVar = div.childNodes
        if(div.hasChildNodes()){
            for(let i = 0;i < limit; i++){
                for(let j = 0; j < newVar.length; j++){
                    newVar[j].remove()


                }
            }
        }




        
    }
    

    
   

