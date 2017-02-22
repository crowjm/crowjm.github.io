---
layout: post
title:  "Wayfinding with Animation"
date:   2017-02-21
excerpt: Animation is a wonderful way to help your users find their way in your product. 🎉
---

Last week I worked on ways to draw the user’s attention to a hamburger menu. I thought back to Val Head and Sarah Drasner’s [animation workshop](https://webanimationworkshops.com/), which I was lucky enough to attend last year and thought, “animation can help me with this.” I wanted to get the user’s attention to the hamburger menu, but not in an obnoxious “LOOK AT ME HEY HI HELLO!!!” way. I prototyped three possible solutions.

<ul>
	<li>
		<span class="list__title">Draw and Bounce</span>
		<p data-height="300" data-theme-id="12329" data-slug-hash="WpeeQB" data-default-tab="css,result" data-user="crowjm" data-embed-version="2" data-pen-title="header animation prototype - draw & bounce" class="codepen">See the Pen <a href="http://codepen.io/crowjm/pen/WpeeQB/">header animation prototype - draw & bounce</a> by Jesse Crow (<a href="http://codepen.io/crowjm">@crowjm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
		<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
	    <p>The draw and bounce animation consists of two parts: the draw and the bounce.</p>
	    <p>The lines of the hamburger menu are drawn in from the left to the right, which hints at the direction the content will come into view when the hamburger menu is opened. I wanted to portray to the user that something will come in from the left when you click the burger icon.</p>
	    <p>Since the draw part of the animation is very subtle, I added in a little bounce after all parts of the hamburger menu are on the screen. If the user misses the draw, they are likely to see the bounce and know to click the hamburger to see more.</p>
	</li>
	<li>
		<span class="list__title">Grow and Wave</span>
		<p data-height="300" data-theme-id="12329" data-slug-hash="wJwwaN" data-default-tab="css,result" data-user="crowjm" data-embed-version="2" data-pen-title="header animation prototype - grow & wave" class="codepen">See the Pen <a href="http://codepen.io/crowjm/pen/wJwwaN/">header animation prototype - grow & wave</a> by Jesse Crow (<a href="http://codepen.io/crowjm">@crowjm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
		<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
    	<p>I wanted this animation to be friendly without being overbearing, inviting the user’s attention to the hamburger menu. I explored versions of this without the hamburger menu growing, but just the wave could be missed with everything else happening on the product’s home page. In this case, scaling the hamburger menu up made sure the wave would be seen.</p>
	</li>
	<li>
		<span class="list__title">Glow</span>
		<p data-height="300" data-theme-id="12329" data-slug-hash="KaEJJx" data-default-tab="css,result" data-user="crowjm" data-embed-version="2" data-pen-title="header animation prototype - glow" class="codepen">See the Pen <a href="http://codepen.io/crowjm/pen/KaEJJx/">header animation prototype - glow</a> by Jesse Crow (<a href="http://codepen.io/crowjm">@crowjm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
		<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
    	<p>This animation was inspired by something I've seen a lot on mobile: when you touch a part of the screen, the background around what you touched has a colored circle around it. I wanted to explore a version of this since it seems to be a common wayfinding pattern.</p>
	</li>
</ul>

Getting to prototype different animation-based solutions to solve a problem for users was a really fun experience and I hope I get to do more of it in the future! Animation is a wonderful way to help your users find their way in your product. 🎉