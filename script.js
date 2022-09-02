//create html elements using createNode function
function createNode(element){
    return document.createElement(element);
}

//create a function to append second parameter to first parameter
function append(p,el){
    return p.appendChild(el);
}

const div = document.querySelector('.container');
const url = "https://random-words-api.vercel.app/word";   
fetch(url).then((response)=>response.json())
.then((data)=>{
    //console.log(data);
    
    return data.map((obj)=>{
        //create three span tags for holding the data
        let span1 = createNode('span');                                   
        span1.innerHTML = `Word : ${obj.word}<br>`;
        let span2 = createNode('span');                                  
        span2.innerHTML = `Definition : ${obj.definition}<br>`;
        let span3 = createNode('span');
        span3.innerHTML = `Pronunciation : ${obj.pronunciation}`;

        //append all the spans to container class
        
        append(span2,span3);
        append(span1,span2);
        append(div,span1);
    
    })
}).catch((err)=>{
    console.log(err);
});