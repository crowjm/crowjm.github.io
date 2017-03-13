---
layout: post
title:  "Animating Height"
date:   2017-03-13
excerpt: A reference for animating the height of an element using height, max-height, and scale(Y).
---

I've recently worked on a couple of projects where I've needed to animate the height of an element. Due to varying markup structures and project requirements, I used different techniques to accomplish this animation. I experimented with animating the height, max-height, and scale(Y) of and element. 

<ul>
	<li>
		<span class="list__title">Scale(Y)</span>
		<p data-height="300" data-theme-id="12329" data-slug-hash="b73dd3f9cfcea509294c5050ea87fe94" data-default-tab="js,result" data-user="crowjm" data-embed-version="2" data-pen-title="animate height with scaleY()" class="codepen">See the Pen <a href="http://codepen.io/crowjm/pen/b73dd3f9cfcea509294c5050ea87fe94/">animate height with scaleY()</a> by Jesse Crow (<a href="http://codepen.io/crowjm">@crowjm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
		<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
	    <p>There are two pros to animating height with scale(Y). The first is that you don't need to know what the height of the element will be. This is because you can animate scale(Y) to 1, which is the full height of an element. The second is that it works if you are animating multiple elements that have different heights.</p>
	    <p>The con to animating height with scale(Y) is that the element will always take up its full height, even when scale(Y) is set to 0. Scale(Y) doesn't affect the flow of surrounding elements, so they won't adjust to take up the apparent empty space of an element with a scale(Y) value of less than 1. <a href="https://tympanus.net/codrops/css_reference/transform/">Tympanus</a> has an article that goes more in depth about transforms and how content does or doesn't reflow.</p>
	</li>
	<li>
		<span class="list__title">Height</span>
		<p data-height="300" data-theme-id="12329" data-slug-hash="9c0b3c38d1599a9436a8c92ab63045c7" data-default-tab="css,result" data-user="crowjm" data-embed-version="2" data-pen-title="animate height with height" class="codepen">See the Pen <a href="http://codepen.io/crowjm/pen/9c0b3c38d1599a9436a8c92ab63045c7/">animate height with height</a> by Jesse Crow (<a href="http://codepen.io/crowjm">@crowjm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
		<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
    	<p>The pro to animating an element's height using height is that the elements around what's being animated reflow while its height is less than its full height.</p>
    	<p>The con to animating with height is that you need to know the exact height of the element being animated. If the height value you animate to is smaller than the element's actual height, part of the element will be cut off. If it's larger, there will be extra space between the element that's being animated and the element below it.</p>
	</li>
	<li>
		<span class="list__title">Max-Height</span>
		<p data-height="300" data-theme-id="12329" data-slug-hash="38d55ec6b7a83ad7506a31ca8b6344ee" data-default-tab="css,result" data-user="crowjm" data-embed-version="2" data-pen-title="animate height with max-height" class="codepen">See the Pen <a href="http://codepen.io/crowjm/pen/38d55ec6b7a83ad7506a31ca8b6344ee/">animate height with max-height</a> by Jesse Crow (<a href="http://codepen.io/crowjm">@crowjm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
		<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
    	<p>There are two pros to animating the height of an element with max-height. The first is that the elements around what's being animated reflow when it's smaller than its full height. The second is that you don't need to know the exact height of what's being animated. Max-height is especially useful when working with dynamic content.</p>
    	<p>The con to animating with max-height is the possibility of a jarring animation. If the max-height you animate to is a lot larger than the actual height of the element, the animation will run very quickly.</p>
	</li>
</ul>