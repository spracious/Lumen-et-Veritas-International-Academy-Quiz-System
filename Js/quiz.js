// Quiz
var userNameElement = document.getElementById("sName");
var schoolNameElement = document.getElementById("uName");

var storedUserName = localStorage.getItem("name");
var storedUserSchool = localStorage.getItem("sch_name");

function Question(obj)
{
    var objKey = Object.keys(obj);
    if (objKey.length !== 3)
    {
        this.question = "Invalid question object passed";
    }
    else
    {
        this.question = obj[objKey[0]];
        this.options	= obj[objKey[1]];	
        this.answer = obj[objKey[2]];		
    }
}

//create Question methods

Question.prototype.displayQuestion = function(){
        var html = this.question;
             html += "<br><br>";
             this.options.forEach(function(val){
                 html += "<button class='opt'><input type='radio' name='options' class='options' value='"+val+"'>"+val+"</input><br></button>";
             });
             
        return html;
}

Question.prototype.isCorrect	= function(reply){
        return reply === this.answer;
}




var JSON = [{"question":"The cell that lacks a nucleus is","options":["Flame cell","Spermatozoan","Red blood corpuscles in man","White blood corpuscles"],"answer":"Red blood corpuscles in man"},
    
    {"question":"One of these was in existence before the outbreak of the second world war","options":["The OAU","ECOWAS","The UNO","The League of Nations"],"answer":"The League of Nations"},

            {"question":"An important advantage of creating more constitutions in a federal state is to","options":["Enhance the Peoples's participation","Enable ambitious Politicans to gain political power","Make the states gain more power from the federal government","Curb the excess of the federal government"],"answer":"Enhance the Peoples's participation"},

            {"question": "Under the Presidential system","options":["The party with the majority of seats forms the Executive","There is the principle of collective responsibility","The president may come from any of the parties","The states take instruction from the federal government."],"answer":"The president may come from any of the parties"},

            {"question":"The oxide of Nitrogen used in medicine as anaesthetic is","options":["Nitrogen dioxide","Nitric oxide","Nitrous oxide","Nitrogen pentoxide"],"answer":"Nitrogen pentoxide"},

            {"question":"Pollination by birds is calledPublic opinion is important because it","options":["Tells government what action it must take","Lets government know what the people want","Allows Police to manage crisis","Guarantees people’s freedom and rights"],"answer":"Lets government know what the people want"},

            {"question":"The gas predominantly responsible for global warning is","options":["Carbon dioxide","Carbon monoxide","Nitrous oxide","Nitrogen peroxide"],"answer":"Carbon dioxide"},

            {"question":" Bicameral legislature exists","options":["Where two cameras are used to monitor court proceedings","To prevent the concentration of power on the legislative house","To provide jobs for more politicians","JTo ensure that just laws are passed"],"answer":"To prevent the concentration of power on the legislative house"},

            {"question":"Africans were first elected to the legislative council in British West Africa in","options":["Ghana","Sierra Leone","The Gambia","Nigeria"],"answer":"Ghana"},

            {"question":"Small pox is caused by","options":["Bacteria","Fungus","Algae","Virus"],"answer":"Virus"},

            {"question":"The blue colour of the clear sky is due to","options":["Diffraction of light","Dispersion of light","Reflection of light","Refraction of light"],"answer":"Dispersion of light"},

            {"question":"One of the functions of the Ministry of external affairs is the","options":["Deportation of illegal aliens","Issuance of Passports","Defence of the Country’s Borders","Promotion of national interests"],"answer":"Promotion of national interests"},

            {"question":"The leader of the Northern People’s congress was","options":["Yakubu Maitama Sule","AbubakarTafawa Balewa","Aminu Kano","Ahmadu Bello"],"answer":"Ahmadu Bello"},

            {"question":"The intencity of Earthquakes is measured on","options":["Richter scale","Secant scale","Mercalli scale","Beaufort scale"],"answer":"Richter scale"},

            {"question":" Which of the following is NOT an acceptable means of achieving democracy?","options":["Referendum","Recall","Initiative","Lung"],"answer":"Riots"},

            {"question":"A bill that applies to the whole population and is intended to promote the general welfare is called","options":["A private bill","A decree","An Appropriation bill","A public deal"],"answer":"An Appropriation bill"},

            {"question":"The second military coup detat in Nigeria took place on","options":["January 15, 1966","October 1, 1966","July 29, 1966","July 29, 1975"],"answer":"July 29, 1966"},

            {"question":"The minorities Commission appointed in Nigeria in 1957 recommend that","options":["More states should be created in the federation","No more states should be created before independence","Nigeria should revert to a unitary structure","the legislature should Legislate for the minority areas e the minorities should constitute one state"],"answer":"More states should be created in the federation"},

            {"question":"The disease diphtheria affects","options":["Lungs","Body joints","Intestine","Throat"],"answer":"Throat"},

            {"question":"A condition for judicial independence is the appointment of judges by the","options":["Civil service commission","Judicial service Commission","Low Review Commission","The 1979 constitution"],"answer":"Judicial service Commission"},

            {"question":"An important principle of the civil service is","options":["Authoritarianism","Anonymity","Nepotism","Partisanship"],"answer":"Anonymity"},

            {"question":"Which of these constitutions recognized local government as the third tier of government","options":["The 1946 Constitution","The 1960 constitution","The 1963 constitution","The 1979 constitution"],"answer":"The 1979 constitution"},

            {"question":"Rule of Law refers to situation in which","options":["Lawyers are the rulers","Laws are supreme","The judiciary is independent","Parliament makes laws"],"answer":"Laws are supreme"},

            {"question":"The dynamo is a device for converting","options":["Heat energy into electrical energy","Mechanical energy into electrical energy","Magnetic energy into electrical energy","None of the above"],"answer":"Mechanical energy into electrical energy"},

            {"question":"A social system in which power is derived from control over land is called","options":["Oligarchy","Feudalism","Socialism","Welfarism"],"answer":"Feudalism"},

            {"question":"The hardest substance available on earth is","options":["Platinum","Diamond","Graphite","Gold"],"answer":"Platinum"},

            {"question":"A system in which no single person serves as the chief executive is known as","options":["Republican","Revolutionary","Collegial","Parliamentary"],"answer":"Parliamentary"},

            {"question":"A parliamentary system, who ensures that members are in the house to vote on major issues","options":["Party leaders","Speaker of the House","Clerk of the House","Whip"],"answer":"Whip"},

            {"question":"Thalassaemia is a hereditary disease affecting","options":["Lungs","Blood","Heart","Kidney"],"answer":"Blood"},

            {"question":"Traditional rulers were restricted to ceremonial rules by the local government reforms of","options":["1966","1976","1984","1987"],"answer":"1976"},

            {"question":"Persons with which blood group are called universal donors?","options":["A","AB","B","O"],"answer":"O"}];


var counter = 1;	
var score = 0;	
var total = 100;
var displayElement = document.getElementById("question");   
var nextButton = document.getElementById("next");	 
var timerr = document.getElementById("timer");		 
var intTag = null;									


displayOnBrowserLoad();

setTimeout(showQuestion,5000);	 
setTimeout(startTimer,5000);			





function displayOnBrowserLoad()
{
     displayElement.innerHTML = "Please wait! Questions to be displayed shortly";  

}

function showQuestion()
{
    var randInt = Math.floor(Math.random()*(JSON.length));	 
    var questObject = new Question(JSON[randInt]);			 
    
    displayElement.innerHTML = (counter)+". "+questObject.displayQuestion();
    nextButton.value = "Submit";								 

    window.questObject = questObject; 						  
}


function nextQuestion()
{	

    // if(nextButton.value == "Start Again")		
    // {
    //     startTimer();
    // }

    var picked = "";
    var input = document.getElementsByClassName("options");
    for(var i=0;i<input.length;i++)
    {
        if(input[i].checked)
        {
            picked = input[i].value;
        }
    }
    if(questObject.isCorrect(picked))
    {
        score +=1;		
    }
    counter +=1;		 

    showQuestion();

    if(counter===11)
    {
        terminateQuiz();	
    }
}



 
function terminateQuiz(){
    
    //  viewResult = JSON.parse(localStorage.getItem("details"));
    // var sch = document.getElementById("cName").value;
    // var fName = document.getElementById("uName").value;
 
    displayOnBrowserLoad();
    var resultMessage = "Dear " + storedUserName + ", your score is " + (score * 1000 / total) + '%';
    alert(resultMessage);

    counter = 0;
    score = 0;
    nextButton.value = window.location.href = "../index.html";
    clearInterval(intTag);
    timerr.innerHTML = "--:--";
}


function startTimer()
{
    var min = 2;
    var sec = 0;
    var m;
    var s;
    intTag = setInterval(function(){
        sec -= 1;
        if(sec==-1)
        {
            min -= 1;
            sec = 59;
        }
        m = (min<10) ? ("0"+min):min;
        s = (sec<10) ? ("0"+sec):sec;
        timerr.innerHTML = m+":"+s;

    },1000);
}


setInterval(function(){
    if(timerr.innerHTML == "00:00")
    {
        alert("Oops! Outta time").value = window.location.href="../index.html";
    }
},1000);















 