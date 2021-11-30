---
title: Projects
layout: default_noheader
permalink: /projects/
---

<style>
     /* Split the screen in half */
    .split {
      height: 100%;
      width: 50%;
      position: fixed;
      z-index: -2;
      top: 0;
      overflow-x: hidden;
      padding-top: 20px;
    }

    .split a {
      height: 100%;
      width: 100%;
      display: block;
    }

    /* Control the left side */
    .left {
      left: 0;
      background-color: #156090;
    }

    .left a:hover {
      box-shadow: inset 0 0 50px 50px rgba(0, 35, 57, 0.5);
    }

    /* Control the right side */
    .right {
      right: 0;
      background-color: #159858;
    }

    .right a:hover {
      box-shadow: inset 0 0 50px 50px rgba(0, 35, 57, 0.5);
    }

    /* If you want the content centered horizontally and vertically */
    .centered {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: -3;
    }

    .centered h1 {
      font-size: 72px;
    }
</style>

 <div class="split left">
  <a href="programming"></a>
  <div class="centered">
    <h1 style="color: #159858;">Programming</h1>
  </div>
</div>

<div class="split right">
  <a href="gamedev"></a>
  <div class="centered">
    <h1 style="color: #156090;">Game Dev</h1>
  </div>
</div> 