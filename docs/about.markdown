---
title: About Me
description: <pre>          <a onClick="rBackground(); return false;" href="#">Background</a>          <a onClick="rClasses(); return false;" href="#">Classes</a>          <a onClick="rCertifications(); return false;" href="#">Certifications</a>          <a onClick="rEducation(); return false;" href="#">Education</a>          <a onClick="rResume(); return false;" href="#">Resume</a>          </pre>
layout: default
permalink: /about/
---

<style>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 90px;
        background-color: #002339;
        height: 10vh;
    }
</style>

<body onload="rBackground()">
    <div class="about-content" id="Background">
      <h1 class="about-header"><strong>Background</strong></h1>
      <h2 style="color: lightblue">About me</h2>
    </div>

    <div class="about-content" id="Classes">
      <h1 class="about-header"><strong>Classes</strong></h1>
    </div>

    <div class="about-content" id="Certifications">
      <h1 class="about-header"><strong>Certifications</strong></h1>
    </div>

    <div class="about-content" id="Education">
      <h1 class="about-header"><strong>Education</strong></h1>
    </div>

    <div class="about-content" id="Resume">
      <h1 class="about-header"><strong>Resume</strong></h1>
    </div>

    <script src="{{ site.baseurl }}/assets/js/reveal.js"></script>
</body>
