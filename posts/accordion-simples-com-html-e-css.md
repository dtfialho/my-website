---
title: 'Criando um accordion simples com somente HTML e CSS'
date: '2022-07-13T12:01:42-0300'
hero_image: '/img/posts/accordion-simples-com-html-e-css.jpg'
excerpt: 'Nesse post mostro como fazer um accordion utilizando só HTML e CSS, sem nenhuma linha de Javascript'
---

Fala pessoal! Voltando mais uma vez, hoje trago um post bem rapidinho sobre uma feature que é bem comum de vermos sendo utilizada. Existem várias formas de se criar um accordion e nesse post estou trazendo para vocês uma versão bem simples utilizando apenas HTML e CSS, sem uma única linha de Javascript.

Sem mais delongas vamos ao código que é bem simples:
<iframe height="300" style="width: 100%;" scrolling="no" title="HTML and CSS Accordion" src="https://codepen.io/dtfialho/embed/OJvRjxr?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/dtfialho/pen/OJvRjxr">
  HTML and CSS Accordion</a> by Diego T. Fialho (<a href="https://codepen.io/dtfialho">@dtfialho</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Explicando o código

```markup
<div class="accordion">
  ...
</div>
```
```css
.accordion {
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
}
```
Para o container principal do accordion usamos apenas uma `div` com a classe `accordion`. Adicionamos uma borda para poder ver as dimensões do accordion com mais facilidade, e arredondamos as bordas escondendo o overflow para garantir que as bordas fiquem arredondadas.

```markup
<div class="accordion-item">
  ...
</div>
```
```css
.accordion-item {
  overflow: hidden;
}
.accordion-item:not(:last-child) {
  border-bottom: 1px solid #fff;
}
```
Cada item do accordion será uma `div` com a classe `accordion-item`. Aqui temos duas regras uma para esconder o overflow, assim quando o accordion estiver fechado o seu conteúdo não aparecerá. Outra para adicionar uma borda, assim conseguimos ver uma separação entre cada item.

Dentro de cada `accordion-item` temos três elementos. Um `input` checkbox, uma `label` para o input e uma `div` para o conteúdo.

```markup
<input type="checkbox" id="accordion-item-1" class="item-input" />
<label for="accordion-item-1" class="item-label">...</label>
```
```css
.item-input {
  display: none;
}
.item-label {
  display: flex;
  justify-content: space-between;
  background-color: #282a36;
  color: #fff;
  padding: 16px;
}
.item-label::after {
  content: '>';
  width: 1em;
  height: 1em;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}
```
Vamos esconder o input com um `display: none` e a nossa label leva um `display: flex` com `justify-content: space-between`. Aqui eu utilizei o pseudo elemento `::after` para criar um ícone que tem uma transição e fica sempre no lado direito da label, mas podemos usar também um ícone em svg ou uma imagem para deixar mais bonitinho, por agora vou deixar assim mesmo e vocês podem usar a criatividade para melhorar. :)

```markup
<div class="item-content">...</div>
```
```css
.item-content {
  transition: all 0.3s ease-in-out;
  max-height: 0;
  padding: 0 16px;
}
```
Por último temos nossa div que vai ter o conteúdo de cada item do accordion, aqui iniciamos com `max-height: 0` para "escondê-la".

```css
.item-input:checked ~ .item-label::after {
  transform: rotate(90deg);
}
.item-input:checked ~ .item-content {
  max-height: 100vh;
  padding: 16px;
}
```
E aqui é onde a mágica acontece. Ao clicar na label, o input fica como `checked` então usamos a pseudo classe `:checked` e adicionamos um `max-height: 100vh` na div do conteúdo, fazendo ela ficar visível e rotacionamos o nosso "ícone". Ao clicar novamente na label, a regra não se aplica e o conteúdo volta a ficar oculto.

Bom pessoa, por agora é isso. Espero que tenham gostado e qualquer feedback é só comentar lá no [twitter](https://twitter.com/dtfialho). Um abraço e até o próximo post!
