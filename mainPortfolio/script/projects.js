// array of project types each one is an array with id objects each one of them is a project
const projects=[
// to be showen when empty project type is found
error=[
        //project id to identify to project to other controlers (should ne the innerHTML of correspondend navElement)
        "emptyProjectType"
        ,
        {
        //content related info
        title:"Ops",
        image:"./image/projects/emptySection.jpg",
        imgWidth:"320px",
        imgHeight:"310px",
        description:"It seems that i have not made realy expirence in this field yet.",
        time_needed:"0 Days",
        tech:"",
        link:"",
    }]
,  
Frontend_projects=[
    //project id to identify to project to other controlers (should ne the innerHTML of correspondend navElement)
    "Frontend projects"
    ,
{
    //content related info
    title:"Online servey app",
    image:"./image/projects/webServey.png",
    imgWidth:"560px",
    imgHeight:"310px",
    description:"I have developed this app as a bachelor project. The main focus was to measure hardware related conditions on the pc of the clients using JavaScript",
    time_needed:"1 Month",
    tech:"JavaScript, HTML5, CSS, Bootstrab",
    link:"../BachelorProject/index.html",
},
{
    //content related info
    title:"Candy Shop",
    image:"./image/projects/candy.jpg",
    imgWidth:"520px",
    imgHeight:"310px",
    description:"This Website was developed in very limited time and was part of recruiting tasks for a frontend developer position.",
    time_needed:"1 Day",
    tech:"JavaScript, HTML5, CSS, Bootstrab",
    link:"../candyShop/index.html",
},
{
    //content related info
    title:"This website",
    image:"./image/projects/mainPortfolio.png",
    imgWidth:"450px",
    imgHeight:"400px",
    description:"This website is a personal portfolio to show my work on many different projects. This project contains real-time 3D animations and the content is dynamically processed",
    time_needed:"2 Days",
    tech:"JavaScript, HTML5, CSS, Three.js",
    link:"./",
},
]
,
backend_projects=[
    //project id to identify to project to other controlers (should ne the innerHTML of correspondend navElement)
    "Backend projects"
    ,
    {
    //content related info
    title:"Facebook pages manager",
    image:"./image/projects/facebookPage.jpg",
    imgWidth:"500px",
    imgHeight:"280px",
    description:"A small app i created in the beginning to automate some tasks in my facebook page like answering messages. After a while more user started using it. The app lets the user automate answering messages and replying to comments on his facebook page.",
    time_needed:"2 Weeks",
    tech:"PHP, SQL, CSS, HTML, JavaScript, Facebook API",
    link:"https://github.com/ashrafbeshtawi/FacebookApp",
}]
,
python=[
    //project id to identify to project to other controlers (should ne the innerHTML of correspondend navElement)
    "Python"
,
{
    //content related info
    title:"Cryptocurrency Trading-bot",
    image:"./image/projects/crypto.jpg",
    imgWidth:"500px",
    imgHeight:"300px",
    description:"This bot collects data about any given cryptocurrency and calculates some financial indicators like MACD,RSI,...",
    time_needed:"1 Day",
    tech:"Binance API ,http-requests , pandas",
    link:"https://github.com/ashrafbeshtawi/BinanceBot",
},
{
    //content related info
    title:"Covid 19 Datascience project",
    image:"./image/projects/covid.jpg",
    imgWidth:"400px",
    imgHeight:"300px",
    description:"This project aimed to collect data about the lockdown period in each country and analyse the lockdown measures and the results and report the correlations found",
    time_needed:"15 Days",
    tech:"http-requests , pandas, numpy, seaborn, matplotlib",
    link:"https://github.com/mohamedsamy95/Data-Science-Python",
},
{
//content related info
title:"Webscraping for online games",
image:"./image/projects/travian.jpg",
imgWidth:"500px",
imgHeight:"300px",
description:"This bot can visits an online game called travian and performs automated tasks on behalf of the user",
time_needed:"10 Days",
tech:"requests ,BeautifulSoup",
link:"https://github.com/ashrafbeshtawi/TravianBot",
}
]
,
ai=[
    //project id to identify to project to other controlers (should ne the innerHTML of correspondend navElement)
    "AI"
    ,
    {
    //content related info
    title:"Neuralnetwork Framework",
    image:"./image/projects/neuralnetwork.png",
    imgWidth:"500px",
    imgHeight:"350px",
    description:"This framework allows users to create neuralnetworks easily with any number of layers and neurons and train them on any given training data.",
    time_needed:"1 Month",
    tech:"python, numpy ,matplotlib , pandas",
    link:"https://github.com/ashrafbeshtawi/Neuralnetwork",
}
,
{
    //content related info
    title:"Machine learning",
    image:"./image/projects/machine.jpg",
    imgWidth:"550px",
    imgHeight:"350px",
    description:"Simple implementaion for popular machine learning methods.",
    time_needed:"1 Week",
    tech:"python, numpy ,matplotlib",
    link:"https://github.com/ashrafbeshtawi/machineLearning",
}

]
,
CJava=[
    //project id to identify to project to other controlers (should ne the innerHTML of correspondend navElement)
    "Java/C"
    ,
    {
    //content related info
    title:"Quote Server",
    image:"./image/projects/server.jpg",
    imgWidth:"480px",
    imgHeight:"300px",
    description:"simple implementaion for Client/Server which requests/provide quote of the day responses",
    time_needed:"2 Days",
    tech:"native C",
    link:"https://github.com/ashrafbeshtawi/Cserver",
},
{
//content related info
title:"Chatbot",
image:"./image/projects/chatbot.png",
imgWidth:"600px",
imgHeight:"300px",
description:"A kitchen assistent, which uses many different machine learning and pattern matching methods to provide recipe suggestions and answer basic questions",
time_needed:"2 Weeks",
tech:"Java, pattern matching, NLP",
link:"https://github.com/ashrafbeshtawi/Chatbot",
}
]
,
other=[
    //project id to identify to project to other controlers (should ne the innerHTML of correspondend navElement)
    "other projects",
    {
    //content related info
    title:"Assembly",
    image:"./image/projects/assembly.jpg",
    imgWidth:"600px",
    imgHeight:"300px",
    description:"I created this project as a part of teching event at my university to show students how to conver C code to assembly",
    time_needed:"2 Days",
    tech:"MIPS, Assembly",
    link:"https://github.com/ashrafbeshtawi/TUT5-MIPS",
    }   
]

]
