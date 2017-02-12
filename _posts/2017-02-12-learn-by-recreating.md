---
layout: post
title:  "Learn by Recreating"
date:   2017-02-12
excerpt: One of the best ways I've found to learn a new skill is to recreate.
---

There are so many things that are possible with design and front end development. One of the best ways I've found to learn a new skill is to recreate.

What this looks like for me (most of the times) is scrolling through CodePen, finding myself in awe of a Pen, and setting out to make something similar on my own.

Earlier this week, I found [this Pen by Made on Mars.](http://codepen.io/made-on-mars/pen/JROYzo) Isn't it gorgeous?! I'm working on upping my animation skills, and having an SVG appear drawn on the page as you scroll down is something I hadn't thought of. After a few minutes of scrolling up and down I knew this was something I wanted to learn how to do. 

The HTML and CSS were straightforward. I used an SVG I made of a bouquet of flowers and made sure I had classes attached to the correct elements. I've worked with animating this SVG before, so I had stroke-dashoffset values for all the components. For this Pen, I wanted to keep the CSS simple, so I used the largest stroke-dashoffset value for all of the elements.

I focused mostly on the JS for this Pen. The original Pen by Made on Mars uses jQuery. Since I usually work with vanilla JS at work, I knew I wanted to rewrite the JS accordingly. This is where things got tricky—and where I learned the most! The Pen I used for inspiration didn't have any comments, so I had to figure the logic on my own. The main things I learned about are clientHeight, innerHeight, scrollHeight, scrollY.

I had a lot of fun making this pen and can't wait to put the skills I improved to use again.

<p data-height="265" data-theme-id="light" data-slug-hash="ygRQmK" data-default-tab="html,result" data-user="crowjm" data-embed-version="2" data-pen-title="draw svg as scroll" class="codepen">See the Pen <a href="http://codepen.io/crowjm/pen/ygRQmK/">draw svg as scroll</a> by Jesse Crow (<a href="http://codepen.io/crowjm">@crowjm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>