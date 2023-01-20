---
title: AMPScript - Basics
description: Basics about AMPScript
layout: ../../layouts/MainLayout.astro
---

It's okay, we'll all started somewhere ! 

*cough* I still have a look at this section after years of developing on SFMC... *cough*


## Variables

### SET

```markdown
%%[
    SET @usefulvariable = "abcd"
]%%

```

### Display

```html
<p>My super useful variable :  %%=v(@usefulvariable)=%% </p>
```
Expected result :
```html
My super useful variable : 1234
```

-- **Pro tip** : if you have some AMPScript code *inside* your variable and want if to be interpreted, you may want to use `TreatAsContent`

```html
%%[

SET @inception = "Here is the code of my credit card : %%=v(@usefulvariable)=%%"

]%%
<p> %%=v(@inception)=%% </p>
```
Expected result :
```html
Here is the code of my credit card : 1234
```