        const quizdb=[
    {
        question:"Q:1 What does HTML stand for?",
        a:"Hyper Text Markup Language",
        b:"Home Tool Markup Language",
        c:"Hyperlinks and Text Markup Language",
        d: " B and C both",
        asn:"ans1"
    },
    {
    question: "Q:2 Who is making the Web standards?",
    a:"The World wide web consrtium",
    b:"Mozila",
    c:"Google",
    d:"Microsoft",
    ans:"ans1"
    },
    {
        question: "Q:3 What does cssstands for:",
        a:"computer style sheet",
        b:"creative style sheet",
        c:"castcanding style sheet",
        d:"colorful style sheet",
        ans:"ans3"
    },
    {
         question:" Q:4 which HTML attribute is used to define inline style",
         a:"class",
         b:"font",
         c:"styles",
         d:"style",
         ans:"ans4"   
    },  
    {
        question:"Q:5 Which character is used to indicate an end tag?",
        a:"<",
        b:">",
        c:"/",
        d:"*",
        ans:"ans3"
    },
    {
        question:"Q:6 How can you make a numbered list?",
        a:"<dl>",
        b:"<list>",
        c:"<ol>",
        d:"<ul>",
        ans:"ans3"
    },
    {
        question:"Q:7 How can you make a bulleted list",
        a:"<dl>",
        b:"<list>",
        c:"<ol>",
        d:"<ul>",
        ans:"ans4"
    },
    {
        question:"Q:8 Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        a:"src",
        b:"longdesc",
        c:"alt",
        d:"title",
        ans:"ans1"
    }
 ];
 
 const question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const submit = document.querySelector('#submit');
 const answers = document.querySelectorAll('.answers');
 let questincount =0;
let score =0;

 const loadquestion = () => {
    const questionlist = quizdb[questincount];

    question.innerHTML = questionlist.question;
    
    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
    
}
 loadquestion();

 const getcheckanswer = () => {

    let answer;
    answer.forEach((curanselement) => {
        if(curanselement.checked){
            answer = curanselement.id;
        }
        
    });
    return answer;
};
 submit.addEventListener('click',() => {

    const checkanswer = getcheckanswer();
    console.log(checkanswer);

    if(quizdb[questincount].ans)
    {
        score++;
    };
    questincount++;

    if(questioncount < quizdb.lenght)   
    {
        loadquestion();        
    }; 
});
