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
    this.title = '';
    this.image = null;
    this.description = '';
    this.button = '';
    this.link = '#';
    this.theme = '';
    this.fancy = false;
  }

  static get styles() {
    return css`
     
  :host {
        display: inline-block;
  }

  :host([fancy]) {
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
} 


    

.card {
  background-color: var(--card-background-color);
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
  max-height: 300px;
  aspect-ratio: 3/2 auto;
}

.text-container {
  text-align: center;
  padding: 16px;
}

button {
  background-color: teal;
  font-weight: bold;
  font-size: 20px;
  width: 100px;
  height: 60px;
  margin: 12px;

}

a {
  display: block;
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center;
     

}

a:focus,
a:hover {
        background-color: #b02c42;}

details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }

  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    max-height: 130px;
    overflow-y: scroll;
  } `;
  }



  render() {
    return html`

  <div class="card ${this.theme}">
  <img class='card-image' src="${this.image}" width= "300" class="card-image">
  <div class="text-container">
  <h1 class="card-title">${this.title}</h1>
  <p>${this.description}</p>
  <details ?open="${this.fancy}" @toggle="${this.openChanged}">
  <summary>Description</summary>
  <div>
    <slot>${this.description}</slot>
  </div>
</details>
  <button><a href="${this.link}">${this.button}</a></button>
    
  </div>   
  </div>  
  
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }


  static get properties() {
    return {
      title: { type: String },
      image: { type: String },
      description: { type: String },
      button: { type: String },
      link: { type: String },
      theme: { type: String },
      fancy: { type: Boolean, reflect: true }


    };
  }

}

globalThis.customElements.define(MyCard.tag, MyCard);
