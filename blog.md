---
layout: default
title: blog
---
<div class="blog-banner">
  <h1>blog</h1>
</div>
<div class="wrapper">
  <section class="post-list"> <!--list of all blog posts with titles and excerpts-->
    {% for post in site.posts %}
      <div class="post-float"> <!--individual blog post-->
        <p class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</p>
        <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
        <p>{{ post.excerpt }}</p>
      </div>
    {% endfor %}
  </section>
  <!--   <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p> -->
</div>