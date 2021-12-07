---
title: Programming Projects
layout: default_noheader
permalink: /projects/programming
---

<style>
    /* Container for each category */
    .category {
        text-align: center;
        height: 20vh;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
    }

    /* Controls all category headers */
    .category a {
        color: limegreen;
        font-size: 5vh;
    }

    /* Controls all category headers */
    .category a:hover {
        color: white;
        text-decoration: none;
    }

    /* Controls section headers */
    .section {
        text-align: center;
        font-size: 10vh;
        color: white;
        background: #002339;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
    }

    /* Controls section headers */
    .info {
        text-align: center;
        font-size: 3.5vh;
        color: #002339;

    }

    /* Controls category buttons */
    .category button {
        background: transparent; 
        border: 2px solid limegreen;
        color: white;
        font-size: 3vh;
        border-radius: 6px;
        margin-right: 2vh;
        margin: 1vh 1vh;      
        padding: 0.5vh 3vh;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
    }

    /* Controls category button on hover */
    .category button:hover {      
        background-color: limegreen;      
        color: black; 
        border: 2px solid white;
    }

    /* Controls category button on hover */
    hr.outline {      
        height: 0.5vh; 
        margin: 0 0;
    }
</style>


<div style="position: absolute; width: 100%">
    <h1 class="info">Click a <span style="color: limegreen">Section Name</span> to download projects on <span style="color: limegreen">GitHub</span></h1>
    <h1 class="info">Click a <span style="color: white">Project Button</span> to view it on <span style="color: white">OnlineGDB</span></h1>

    <br><hr class="outline"><h1 class="section"><strong>Python</strong></h1><hr class="outline"><br>
    <div class="category">
        <a href="https://github.com/NicholsTyler/cse_231">Introduction to Programming 1</a><br>
        <button onclick=" window.open('','_blank')">Basra</button>
        <button onclick=" window.open('','_blank')">Connect 4</button>
        <button onclick=" window.open('','_blank')">Flags</button>
        <button onclick=" window.open('','_blank')">Password Analysis</button>
    </div>
    <div class="category">
        <a href="https://github.com/NicholsTyler/cse_331">Algorithms & Data Structures</a><br>
        <button onclick=" window.open('','_blank')">Project 6</button>
        <button onclick=" window.open('','_blank')">Project 8</button>
        <button onclick=" window.open('','_blank')">Project 10</button>
    </div>

    <br><hr class="outline"><h1 class="section"><strong>C++</strong></h1><hr class="outline"><br>
    <div class="category">
        <a href="https://github.com/NicholsTyler/cse_232">Introduction to Programming 2</a><br>
        <button onclick=" window.open('https://onlinegdb.com/fF1vQkYqW','_blank')">Math in other Bases</button>
        <button onclick=" window.open('','_blank')">DNA</button>
    </div>
    <div class="category">
        <a href="https://github.com/NicholsTyler/cse_335">Software Design</a><br>
        <button onclick=" window.open('','_blank')">AquaLand</button>
        <button onclick=" window.open('','_blank')">City</button>
        <button onclick=" window.open('','_blank')">Canadian Experience</button>
    </div>
</div>