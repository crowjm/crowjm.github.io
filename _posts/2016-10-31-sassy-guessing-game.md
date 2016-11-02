---
layout: post
title:  "Tutorial: Make a Sassy Guessing Game"
date:   2016-10-31
excerpt: Let’s learn how to use Sass to make a number guessing game!
---

A couple months ago, I gave my first technical talk outside of a classroom setting (!), but forgot to blog about it until now. Let’s learn how to use Sass to make a number guessing game! 

<p data-height="265" data-theme-id="dark" data-slug-hash="Eygoao" data-default-tab="css,result" data-user="crowjm" data-embed-version="2" data-pen-title="Sass Number Guess Game-Final" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/crowjm/pen/Eygoao/">Sass Number Guess Game-Final</a> by Jesse Crow (<a href="http://codepen.io/crowjm">@crowjm</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
The final game.

The guessing game works as such: there are five choices, numbers 1 through 5, that you can guess by clicking on or selecting with your keyboard. The goal is to guess the same number that the computer “thought” of. If your guess is correct, one set of styles will render. If your guess is incorrect, a different set of styles will render.

To build our guessing game, the first thing we’ll need to do is get a random number. There are two Sass number functions that we’ll use to get our random number.

The first is <code class="language-sass">random($number)</code>. This returns a random number with 0 as the lowest possible value and $number (the value we pass into the function) as the highest possible value. For example, if I write random(5), the computer will generate a number anywhere between 0 and 5.

The random number the computer generates isn’t necessarily going to be a whole number, which is what we need for the game. We’ll also use <code class="language-css">round($number)</code>, which rounds the number we pass into it to the closest whole number, whether that’s higher or lower. For example, if I write <code class="language-sass">random(4.25)</code>, the computer will round it to 4.

To make sure we’re using the same number in every part of the logic in the same session, we’ll store our random number in a variable called random-number. We can also pass that variable of random-number into the round number function, so that we will have a nice, whole number to work with.

<pre class="language-sass"><code class="language-sass">$random-number: random(5);
round($random-number)</code></pre>

The next tool we’ll need in our toolbox are equality operators. This way we can see if the random number is equal to one of the numbers that can be guessed. There are two equality operators in Sass: <code class="language-sass">!=</code> is not equal to and <code class="language-sass">==</code> is equal to. We’ll use <code class="language-sass">==</code>.

The next piece of Sass magic we’ll use are control directives, which <a href="http://thesassway.com/intermediate/if-for-each-while">The Sass Way</a> summarizes well as “provide flow and logic and give you a finite level of decision making.” In the game, we want one set of styles to run if the correct number is chosen, and other set of styles to run if the correct number is not chosen. This is a perfect use case for Sass’ <code class="language-sass">@if</code> and <code class="language-sass">@else</code> control directives. 

In our <code class="language-sass">@if</code> directive, we’ll first set the styles that should render if the user guesses the correct matching number. We’ll do so by saying <code class="language-sass">@if round($random-number) == 1 {styles in here}</code>. Then we’ll use <code class="language-sass">@else {styles here}</code> to set the styles that render if the user guesses incorrectly. We’ll have to write this same code out using each number 1 through 5 in the <code class="language-sass">@if</code> control directive (but I'm only going to show it for the number 1 for the sake of brevity).

<pre class="language-sass">
	<code class="language-sass">
		@if round($random-number) == 1 {
		    background-color: pink;
		    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/229892/ice-cream-parrot.gif);
		    background-repeat: no-repeat;
		    background-size: cover;
		    transition: background-color 1s ease;
		  }
		  @else {
		    background-color: #000;
		    transition: background-color 1s ease;
		  }
		}
		/*write out again, changing the number in the first line to 2, 3, 4, and 5*/
	</code>
</pre>

Now, we’ve got our random number, our logic, and our styles and they will all be consistently applied to each number. Try it out! (You will need to refresh though to get another random number). 

However, with the help of a little more Sass magic, we can DRY our code out and make it reusable. ✨✨✨Refactoring time!✨✨✨

Since we want to reuse the same if/else logic and corresponding styles, we can place the code inside a mixin. We’ll call our mixin game-logic, and pass it $number. Then, in our <code class="language-sass">@if</code> control directive, instead of writing <code class="language-sass">@if round($random-number) == 1, 2, 3, 4, 5</code>, we can write <code class="language-sass">@if round($random-number) == $number</code>. Much simpler and reusable!

<pre class="language-sass">
	<code class="language-sass">
		@mixin logic ($number) {
		  @if round($random-number) == $number {
		    background-color: pink;
		    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/229892/ice-cream-parrot.gif);
		    background-repeat: no-repeat;
		    background-size: cover;
		    transition: background-color 1s ease;
		  }
		  @else {
		    background-color: #000;
		    transition: background-color 1s ease;
		  }
		}

		#number1:checked + span::before {
		  @include logic(1);
		}

		#number2:checked + span::before {
		  @include logic(2);
		}

		#number3:checked + span::before {
		  @include logic(3);
		}

		#number4:checked + span::before {
		  @include logic(4);
		}

		#number5:checked + span::before {
		  @include logic(5);
		}
	</code>
</pre>

We can DRY out our code even more using interpolation and the <code class="language-sass">@each</code> control directive. 

The <code class="language-sass">@each</code> control directive allows us to apply particular styles to each item in a list. We have a list of IDs, #number1 all the way to #number5 that we want to apply the same mixin to. The first thing we do in our control directive is create our list. We’re going to write each $number in 1, 2, 3, 4, 5, so that we can access all those numbers as $number in our mixin. 

<code class="language-sass">@each $number in 1, 2, 3, 4, 5</code>

Next, using interpolation and <code class="language-sass">@each</code>’s looping ability, we can write a line that targets each of our ID names #number1-#number5. #number is the start to all our IDs, then #{$number} interpolates all of the numbers that we set in the first line of code, outputting #number1 all the way to #number5. Then we set the rest of what we want to target, and include the mixin, passing it $number, so that the correct number and ID name will be used at the same time. The final code block for this will look like: 

<pre class="language-sass">
	<code class="language-sass">
		@each $number in 1, 2, 3, 4, 5 {
		  #number#{$number}:checked + span::before {
		    @include game-logic($number);
		  }
		}
	</code>
</pre>

There are more things that went into building this game other than the Sass logic and refactoring. However, those were the most important things to cover in this talk. This game also uses a version of the checkbox hack (you can read more about that here and here), and I spent time ensuring that it could be played if a user could only use their keyboard.

I learned a lot about refactoring and some Sass super powers making this demo and crafting the corresponding talk. And it let me get out of my comfort zone and practice my public speaking skills. Thanks for having me, ATXSass!