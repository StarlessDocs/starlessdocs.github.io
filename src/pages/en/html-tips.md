---
title: HTML Tips
description: <table>... <tables> everywhere.
layout: ../../layouts/MainLayout.astro
---

![test](https://i.imgflip.com/77s5go.jpg)

## SFMC native editor for emails

Actually, the SFMC native editor works quites well and produces a responsive code most of the time.

What I learnt after hours and hours trying to debug some weird looking emails it that other CMS may works like a charm of big screens but will probably be a mess on mobile devices.

## A few tips

If you feel courageous today, here are a few tips :
- The `<table>` is made of a `<tbody>` which is made of one or many `<tr>` (r for "row"). Finally, inside `<tr>`, there are at least one `<td>` in which you will put your data.
- Having a `<style>` is often not supported in some emails clients (Gmail for example). I would recommand to set your style inline (more info in CSS-Tips).
- SVGs almost never works on emails.

## A few good practices
- In Cloud Pages (and Emails), do NOT import any external stuff (except pictures and stuff).