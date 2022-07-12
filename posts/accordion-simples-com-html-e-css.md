---
title: 'Criando um accordion simples com somente HTML e CSS'
date: '2022-07-11T12:44:42-0300'
hero_image: '/img/accordion-simples-com-html-e-css.jpg'
excerpt: 'Nesse post mostro como fazer um accordion utilizando só HTML e CSS, sem nenhuma linha de Javascript'
---

Fala pessoal! Voltando mais uma vez, hoje trago um post bem rapidinho sobre uma feature que é bem comum de vermos sendo utilizada em vários sites. Existem várias formas de se criar um accordion e nesse post estou trazendo para vocês uma versão bem simples utilizando apenas HTML e CSS, sem uma única linha de Javascript.

Sem mais delongas vamos ao código.

A estrutura do HTML é bem simples.
```html
<div class="accordion">
  <div class="accordion-item">
    <input type="checkbox" id="accordion-item-1" class="item-input" />
    <label for="accordion-item-1" class="item-label">Item 1</label>
    <div class="item-content">Lorem ipsum dolor 1</div>
  </div>
  <div class="accordion-item">
    <input type="checkbox" id="accordion-item-2" class="item-input" />
    <label for="accordion-item-2" class="item-label">Item 2</label>
    <div class="item-content">Lorem ipsum dolor 2</div>
  </div>
</div>
```
