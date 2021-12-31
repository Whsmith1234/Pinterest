var start =0;
var index =0;
document.onkeydown = checkKey;
var images =[];
var img = document.createElement("img");
function checkKey(e) {

    e = e || window.event;
    if(e.keyCode== '37'){
        if(index>0){
        index--;
        }
        img.src = images[index];
    }
    if (e.keyCode == '39') {
        if(start==0){
            alert("Hey fun fact... I love you!");
           
            img.src = "https://i.pinimg.com/originals/8d/0a/ab/8d0aabc5796689ac17f5b6775490c9e6.jpg";
            var src = document.getElementsByTagName("body")[0];
            src.appendChild(img);
            img.style=`
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            height:50rem;
            `;
            
        h = document.getElementsByTagName("img");
        var count =0;
        for(var i =0;i<h.length;i++){
           if(h[i].srcset){
               srcset=h[i].srcset;
                if(h[i].srcset.includes("https://i.pinimg.com/originals/")){
                    var f =h[i].srcset.split(",");
                    f = f[f.length-1];
                    images[count]=f.substring(1,f.length-3);
                    count++;
                }
             }
        }
        start=1;
    }else{
        index++;
        img.src = images[index];
    }

    }

}

