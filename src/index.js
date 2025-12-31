import "./styles.css"
import battleshipImg from "./images/battleship.jpg"
import weatherImg from "./images/weather.jpg"
import todoImg from "./images/todo.jpg"
import resturantImg from "./images/resturant.jpg"
import ticImg from "./images/tictactoe.jpg"
import adminImg from "./images/admin.jpg"
import linkSvg from "./images/link.svg"

const projects = [
    {
        name: 'BattleShip Game',
        githubLink: 'https://github.com/JoseBarron12/battleship-game',
        liveLink: 'https://josebarron12.github.io/battleship-game/',
        desc: 'A browser-based Battleship game where you place your ships, choose attack coordinates, and battle against a computer opponent.',
        img: battleshipImg
    },
    {
        name: 'Weather App',
        githubLink: 'https://github.com/JoseBarron12/weather-app',
        liveLink: 'https://josebarron12.github.io/weather-app/',
        desc: 'A simple and elegant Weather App built using JavaScript, HTML, and CSS, inspired by the iOS Weather App design.',
        img: weatherImg
    },
    {
        name: 'To-Do-List',
        githubLink: 'https://github.com/JoseBarron12/to-do-list',
        liveLink: 'https://josebarron12.github.io/to-do-list/',
        desc: 'A simple yet powerful To-Do List web app that lets you create and manage tasks and projects/lists right in your browser.',
        img: todoImg
    },
    {
        name: 'Resturant Page',
        githubLink: 'https://github.com/JoseBarron12/resturant-page',
        liveLink: 'https://josebarron12.github.io/to-do-list/',
        desc: 'A simple website for a resturant including a welcome, menu, and about page',
        img: resturantImg
    },
    {
        name: 'Tic-Tac-Toe',
        githubLink: 'https://github.com/JoseBarron12/tic-tac-toe',
        liveLink: 'https://josebarron12.github.io/tic-tac-toe/',
        desc: 'A browser-based tic-tac-toe game',
        img: ticImg
    },
    {
        name: 'Admin Page',
        githubLink: 'https://github.com/JoseBarron12/admin-page',
        liveLink: 'https://josebarron12.github.io/admin-page/',
        desc: 'A simple static admin dashboard',
        img: adminImg
    },
]

const projectSection = document.querySelector(".project-section");

for(const proj of projects)
{
    const project = document.createElement("div");
    project.classList.add("project");
    projectSection.appendChild(project);

    const projImg = document.createElement("img");
    projImg.classList.add("project-image");
    projImg.src = proj.img;
    project.appendChild(projImg);

    const projDesc = document.createElement("div");
    projDesc.classList.add("project-info");
    project.appendChild(projDesc);

    const projHeader = document.createElement("div");
    projHeader.classList.add("project-header");
    projDesc.appendChild(projHeader);

    const projTitle = document.createElement("h4");
    projTitle.classList.add("project-title");
    projTitle.textContent = proj.name;
    projHeader.appendChild(projTitle);

    const projIcons = document.createElement("div");
    projIcons.classList.add("project-icons")
    projHeader.appendChild(projIcons);

    const githubLink = document.createElement("a");
    githubLink.setAttribute("href", proj.githubLink);
    githubLink.setAttribute("target", "_blank");
    githubLink.setAttribute("rel", "noopener noreferrer");
    projIcons.appendChild(githubLink);
    
    const githubText = document.createElement("p");
    githubText.textContent = "GitHub Project Repository (opens in new tab)";
    githubText.classList.add("link-text");
    githubLink.appendChild(githubText);

    const githubIcon = document.createElement("img");
    githubIcon.classList.add("project-icon");
    githubIcon.src = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
    githubLink.appendChild(githubIcon);

    const liveLink = document.createElement("a");
    liveLink.setAttribute("href", proj.liveLink);
    liveLink.setAttribute("target", "_blank");
    liveLink.setAttribute("rel", "noopener noreferrer");
    projIcons.appendChild(liveLink);
    
    const liveText = document.createElement("p");
    liveText.textContent = "Live Project(opens in new tab)";
    liveText.classList.add("link-text");
    liveLink.appendChild(liveText);

    const liveIcon = document.createElement("img");
    liveIcon.classList.add("project-icon");
    liveIcon.src = linkSvg;
    liveLink.appendChild(liveIcon);

    const projInfo = document.createElement("p");
    projInfo.textContent = proj.desc;
    projDesc.appendChild(projInfo);
    

}


