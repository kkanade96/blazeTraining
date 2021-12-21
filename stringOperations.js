function get(){
    var str = document.getElementById('str').value;
    var countBlank = 0;
    var statementCount = 0;
    var commas = 0;
    var vowels = "";
    var index = [];
    var uperCaseString = str.toUpperCase();
    for(var i in str){
        if(str[i] ==' '){
            countBlank++;
        }
        if(str[i] =='.'){
            statementCount++;
        }
        if(str[i] ==','){
            commas++;
        }
        if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
            index.push({[i]:str[i]});
        }

    }
    content = "Count of spaces' ' = "+countBlank;
    content += "<br><br>Count of commas ',' = "+commas;
    content += "<br><br>Count of statements = "+statementCount;
    content += "<br><br>Count of Words' ' = "+(countBlank+1);
    content += "<br><br> Title case = " + str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ');
    content += " <br><br> Upper Case ="+ uperCaseString+"<br><br>";

    for(var j=0; j<=index.length;j++){
        var temp = index[j];
        vowels += temp;
    }
    

    console.log(index)
    document.getElementById('display').innerHTML = content;
    
    document.getElementById('display1').innerHTML = '';

}

function getWord(){
    document.getElementById('display1').innerHTML = '';
    var str1 = document.getElementById('str').value;
    var substr = document.getElementById('substr').value;
    console.log((str1.match(/is/g) || []).length)
    var countt =  (str1.split(substr).length - 1);
    document.getElementById('display1').innerHTML = countt;

}

