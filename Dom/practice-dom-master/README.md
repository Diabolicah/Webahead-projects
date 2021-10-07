# Practice DOM

In this workshop we will use some of the most important DOM methods.

## Setup

1. Clone this repo
2. open task-1/index.html in your editor
3. Run the index.html with vscode's live server.

### Task 1

In this task we have button that we are going to use to hide and show the paragraph in the page (use [The odin project](https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation) as reference).

- Using `addEventListener` add a `click` event to the button, so when it's clicked it would console log 'Hello DOM' in the browsers's console.
- Then using the style attribute (for example `element.style.color` and `element.style.display`) hide the text, and show it again after it was hidden.

![](https://user-images.githubusercontent.com/24195641/92003022-32dd9780-ed49-11ea-94a2-d39eaeee161f.gif)

Let's do it in a different way now, add the following class to your css file:

```css
.hide {
    display: none;
}
```

- Using `element.classList` and it's **methods** hide and show the paragraph.

### Task 2

In this task we have a text input that we want to show it's **value** somewhere else on the page while we are typing (see the example below).

- Using [`querySelectorAll`](https://www.w3schools.com/JSREF/met_document_queryselectorall.asp) select the 3 spans , and then use  `textContent` (`element.textContent`) to change the span's text to the input's value.

> It’s important to note that when using querySelectorAll, the return value is not an array. It looks like an array, and it somewhat acts like an array, but it’s really a “nodelist”. The big distinction is that several array methods are missing from nodelists (e.g. `forEach`). One solution, if problems arise, is to convert the nodelist into an array. You can do this with Array.from() or use a for loop.


![](https://user-images.githubusercontent.com/24195641/92371050-cf19ec80-f103-11ea-9d02-8042d2b17602.gif)

### Task 3

We will now use an array to build a list of products using the DOM.

- Select the `ul` and for every product in the `products` array create an `li` element and append/add it to the list. (Javascript only not html), here is a link for a refresher.

![](https://user-images.githubusercontent.com/24195641/92372852-32a51980-f106-11ea-98dc-e1b910b2762f.PNG)

## Stretch goal

Let's render or show the list in a cooler way :sunglasses:, render each list item 1 second apart from the last one, for example

![](https://user-images.githubusercontent.com/24195641/92375984-903b6500-f10a-11ea-8b2a-b6b193d32c18.gif)

- To achieve this use [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp), and use the **index** of each element in the products array.
