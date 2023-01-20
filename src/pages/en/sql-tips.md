---
title: SQL Tips
description: More table please
layout: ../../layouts/MainLayout.astro
---



## Transact-SQL

**Marketing Cloud use Transact-SQL**. I wish I knew this earlier, it would have save me many hours and a keyboard or two. 
As I only had a MySQL experience, I stuggled a lot before knowing this.  

## Too many results ?

Do you wonder why your query gives you more than 5 millions results instead of 300 ?

Here is a non-exaustive list of what could be the problem.

### Be careful with that "OR"
You. Yes you. Check that "OR" operator in your WHERE clause. 

### JOINTS.

Joints can multiply the results be a decazillion factor. Check your dirty LEFT JOINs in particular ! 

What did you say ?! You just put "JOIN" in your queries ? You are probably querying the whole Internet, be careful with that.

## Table names

Try to set aliases. You'll thank me later.
