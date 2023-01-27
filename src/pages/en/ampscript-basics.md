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
    SET @usefulvariable = "1234"
]%%

```

### Display value

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
SET @usefulvariable = "1234"
SET @inception = "Here is the code of my credit card : %%=v(@usefulvariable)=%%"

]%%
<p> %%=v(@inception)=%% </p>
```
Expected result :
```html
Here is the code of my credit card : 1234
```

## Operators

### Logical Operators (AND, OR...)
Only two types of operators are supported, `or` and `and` :

`||`, `or` : OR

`&&`, `and` : AND

-- These operators are not case sensitives. This means `or` and `OR` both works for example.

### Comparison Operators (>, <, ==...)

`==`   -> "is equal to". **WARNING** : do not forget the second `=` ! 

`!=`   -> "is not equal to"

`>`    -> "is greater than"

`<`    -> "is less than"

`>=`   -> "is greater than or equal to"

`<=`   -> "is less than or equal to"

<!--
## IF


```
IF [CONDITION 1] [OPERATOR] [CONDITION 2] THEN

    ...

ELSE

    ...

ENDIF

```



### Example

Here is an example :

```
IF @moneyinbank > 100 OR @accountname == "Jeff Bezoz" THEN

    SET @message = "I will be able to eat this month."

ELSE

    SET @message = "Who need to pay rent anyway ?"

ENDIF

```


### Good practice

## LOOP (FOR)


## Get data from a Data Extension

### Data from the Sendable DE

SET @firstname = AttributeValue("firstname")

### 

## Push data to a Data Extension

## Useful functions

### Concat()


-->