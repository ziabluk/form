let option = new Option("clasica","classic",true,true);
document.getElementById('genres').append(option);


let elem2 = document.getElementById("elem2");
let area = document.createElement('textarea');
elem2.onclick = function() { 
    area.value = elem2.innerHTML;
    
    area.onkeydown = function(event){
        if (event.key == "Enter"){
            this.blur()
        }
    }
    
    elem2.replaceWith(area);
    area.focus();
}
console.log(area);
area.onblur = function() {
    console.log(elem2.value);
    elem2.innerHTML = area.value;
    area.replaceWith(elem2);
}


let elem3 = document.getElementById("bagua-table");
let area2 = document.createElement('textarea');
elem3.onclick = function(){
    area2.innerHTML = elem3.value
    area2.onkeydown = function(event){
        if (event.key == "Enter"){
            this.blur()
        }
    }
    
}
