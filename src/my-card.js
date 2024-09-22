import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Do you want to earn MONEY?!";
    this.image = 'https://media.istockphoto.com/id/476196983/photo/business-man-displaying-a-spread-of-cash.jpg?s=612x612&w=0&k=20&c=RBMDX5ChvnD-M8Vcxgwgo6D3jhxlFSjUjNMCLWO7gtM=';
    this.description = 'The image is a well-dressed gentleman showing off all of his "hard-earned" money. Click below if you would like to achieve the same';
    this.button = 'Details';
    this.link = 'https://hax.psu.edu';
    this.theme = '';
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .card {
  background-color: orange;
  max-width: 400px;
  border: 8px solid green;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 3);
  margin: 16px;
  
  
}

.card-image {
  margin-top: 12px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.text-container {
  text-align: center;
  padding: 16px;
}

.details-button {
  background-color: teal;
  font-weight: bold;
  font-size: 20px;
  width: 100px;
  height: 80px;
  margin: 12px;
}

.card.sale {
    background-color: lightpink;
    border: 8px solid mediumblue;
  }

  .card.vat19 {
    background-color: purple;
    border: 8px solid yellow;
    
  }

  .card.youtube {
    background-color: red;
    border: 8px dashed white;
  }

  .card.grammarly {
    background-color: white;
    border: 8px green solid;
  }

 



    `;
  }

  render() {
    return html`

  <div class="card ${this.theme}">
  <img class='card-image' src="${this.image}" width= "300" class="card-image">
  <div class="text-container">
  <h1 class="card-title">${this.title}</h1>
  <p>${this.description}</p>
  <a href="${this.link}">
  <button class="details-button"> ${this.button} </button>
  </a>
  </div>   
  </div>  
  
    `;


  }

  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      button: { type: String },
      link: { type: String },
      theme: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
