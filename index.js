function eachFunction(item){return `${item} is lit`

}
function mapFunction(num){ return num * 3; }
function findFunction(num){
    return num % 2 == 0;
}
let emptyArray=[]
const numb=[1,2,3]
const createArray=[]
function myEach(collection,callback){if (typeof collection==='object' || Array.isArray(collection)
){
 if (typeof collection==='object'){
    
  
    let assignObject=Object.assign([],collection)
    for (let i=0;i<Object.values(assignObject).length;i++){let stuff=callback(Object.values(assignObject)[i])
        console.log(stuff)
    }
         
    
    return collection
}



}else (createArray.push(collection));{console.log("just data");return createArray}}

testObject={
    name:"prince",
    middle:"faisal",
    last:'gobah'
}
testArray=["sam","alex",'yoyo']

const testData="prince" 


function myMap(collection,callback){let emptyArray=[];
    if (typeof collection==='object' || Array.isArray(collection)
){
 if (typeof collection==='object'){
    let assignObject=Object.assign([],collection)
    for (let i=0;i<Object.values(assignObject).length;i++){let mapStuff=Object.values(collection)[i];
    //emptyArray.push(mapStuff)  
    let test=callback(mapStuff)  

    //console.log(mapStuff)
    
    //console.log(see)
    emptyArray.push(test)
    


}return(emptyArray)
}
}
}
//console.log(myMap(numb,mapFunction))


function myFind(collection, predicate){
    if (typeof collection==='object' || Array.isArray(collection)
){
 if (typeof collection==='object'){
     
     for (let i=0; i<Object.values(collection).length;i++){
        // console.log('no')
         let stuff=
          Object.values(collection)[i];
          //console.log('hi')
          let 
          test=predicate(stuff)
          //onsole.log(test)
          if(test===true)
          {return( stuff)}
        }
    
     
 }
}}

const numArray=[1,2,3,4,5]

function myFilter(collection, predicate){
   
   
      let stuff = Object.values(collection)
      let emptyArray = []
       if (typeof collection==='object' || Array.isArray(collection)
)   {
   
 if (typeof collection==='object'){

      for (let i = 0; i < stuff.length; i++) {
        if (predicate(stuff[i])) {
          emptyArray.push(stuff[i])
        }
      }
      return emptyArray
    }
}}
        
             

       
         
        
     
   
        //return [] 
     

//console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }))
//console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }))
//console.log(myFind(numArray,findFunction))
//myMap([1, 2, 3], function(num){ return num * 3; });
//console.log(typeof testData==='array')
function mySize(collection){
return Object.values( collection).length
}

//console.log(mySize('prince'))
function myFirst(array,n){
    if (n===undefined){
        return Object.values(array)[0]
    }

    else {let sliceHere=Object.values(array).slice(0,n);
    return sliceHere;}
    
}

//console.log(myFirst([5, 4, 3, 2, 1])

function myLast(array,n){
    if (n===undefined){
        return(array[array.length-1])
    }
    else{let sliceHere=array.slice(-n);return sliceHere}
}
//console.log(myLast([5, 4, 3, 2, 1]));  
//console.log(myLast([5, 4, 3, 2, 1], 3))  
function myKeys(object){
return Object.keys(object)
}
//console.log(myValues({one: 1, two: 2, three: 3}));
function myValues(object){
    return Object.values(object)}


    
     /*let slicer=Object.values(collection).slice()
         if (acc===undefined){ 
           acc=slicer[0]
           slicer=slicer.slice(1);console.log(slicer)
        } ;

     {for(let i=0;i<Object.values(collection).length;i++){console.log(acc)
         
       let ace=callback(acc,slicer[i]
        ,collection)

            return(ace) 
             
             
        
     }}}*/
     function myReduce(collection,callback,acc){ 
    let stuff=Object.values(collection).slice()
        

    
     if (acc===undefined) {
       acc = stuff[0]
       stuff = stuff.slice(1)
     }
     for (let i = 0; i < stuff.length; i++){
       acc = callback(acc, stuff[i], collection)
     }
     return acc
   }
    
    
console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) {return acc + val;}))
