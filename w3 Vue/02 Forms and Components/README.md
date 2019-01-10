# HTML 5 forms and VueJS

In this lab you learn to create a form which is a control that accepts information from the user and sends the information to a web server.


## Task list

In this lab you do the following tasks:

- create an HTML 5 form with Vue
- check input with Vue


## 1 Vue directives

Read the chapters on computed and watch properties in Vue https://vuejs.org/v2/guide/computed.html, and also data binding and validation section in https://vuejs.org/v2/guide/forms.html. Notice that we use one lifecycle hook named beforeUpdate, see [documentation](https://vuejs.org/v2/guide/instance.html#Instance-Lifecycle-Hooks).

Get yourself familiar with the example of using VueJS to define forms **Dataupdating_ex.html**.

Next open file **Petshop.hmtl**. It uses a function
```
canAddToCart() {
          return this.product.availableInventory > this.cartItemCount;
}
```
to control if the button to add items in the cart is available. The property availableInventory is set to  5 in product definition. Now the Add button is removed to keep a customer from adding too many product instances to the cart, but it’s a bit heavy-handed. It might be more informative to the user to render the button disabled, because that doesn’t disrupt the continuity of the interface as much and it preserves the layout flow.
The v-if and v-else directives are used to display one of two choices based on
the truth value of the provided expression.


### TODO 1 Test your understanding

1. Display a disabled button using v-if and v-else, when the user isn't allowed to add more items to the chart.
2. Display a message showing the remaining inventory that the user can add to their cart.
3. Add more products in you product list.


## 2 Making a form

Let us add to our data in Vue instance information of an order. This is linked to our petshop via the shopping cart icon. The **forms.html** shows you a blank page with only cart icon, click on it and you get a skeleton form. The Vue application is like this with order information

```
var webstore = new Vue({
      el: '#app',
      data: {
        sitename: "Vue.js Pet Depot",
        showProduct: true,
        a: false,
        states: {
          AL: 'Alabama',
          AK: 'Alaska',
          AR: 'Arizona',
          CA: 'California',
          NV: 'Nevada'
        },
        order: {
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          zip: '',
          state: '',
          method: 'Home Address',
          business: 'Business Address',
          home: 'Home Address',
          gift:'Send As A Gift',
          sendGift: 'Send As A Gift',
          dontSendGift: 'Do Not Send As A Gift'
        },
```

We have a skeleton of form for order info in the file **forms.html**.  There is boilerplate code for the form but it waits for the input field definitions and
the bindings with the v-model.	

The basics of an HTML form should  be familiar to you. The binding in Vue is made with the v-model directive for example 
```
<div>
    <strong>First Name:</strong>
    <input v-model="order.firstName" class="form-control" />
</div>
```
binds this input field with order.firstName in the order data above.

Remember how checkboxes are defined in HTML
```
<input type="checkbox" name="vehicle1" value="Bike"> I have a bike<br>
<input type="checkbox" name="vehicle2" value="Car"> I have a car<br>
<input type="checkbox" name="vehicle3" value="Boat" checked> I have a boat<br>
```
Each choice must have a different value.

Notice that in the order data there are e.g. three fields
`
gift:'Send As A Gift',
sendGift: 'Send As A Gift',
dontSendGift: 'Do Not Send As A Gift'
`
With the v-bind directive binds values to attributes in our HTML elements. You can give the sendGift or dontSendGift with v-bind.
```
<input type="checkbox"
    ....
    v-bind:true-value="order.sendGift"
    v-bind:false-value="order.dontSendGift"
	....
```
v-bind you can use also in radiobuttons and with select options. You also need to get familiar with v-for directive.

### TODO 2 Test your understanding

1. Open file **forms.html**. 

2. Add the bindings with approriate Vue directives. You should see the data updated at the end of the page where we have the HTML like
```
<div>
    <pre>
      First Name: {{order.firstName}}
	  ....
```
 
## 3 Using components

The application is often a tree of components for a header, sidebar, and content area, each typically containing other components for navigation links, blog posts, etc.

To use these components in templates, they must be registered so that Vue knows about them. There are two types of component registration: global and local. Globally registered components can be used in the template of any root Vue instance (new Vue) created afterwards – and even inside all subcomponents of that Vue instance’s component tree.
 In order to use components, remember that we use props for passing data. Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance.


Get yourself familiar with the examples of using VueJS components **Component_ex.html** and **ComponentDatafromAPI_ex.html**.


### TODO 3 Test your understanding

1. Open **ComponentDatafromAPI_ex.html** file.
2. Refactor the code: show also the body text on your page.
3. (A Bigger challenge) Use **https://jsonplaceholder.typicode.com/users** to get data on users. Show the real name and address of the user on your page. 

## Slots

Look at the **slot** folder. Open the html, js, and css files to figure out how the application is working. This is an example of using a slot, which is a placeholder for content to be shown.
We have in our app a list on people:
```
 data: {
    persons: [ 
      { name: 'Michelle', tweet: '@MichelleObama' }, 
      { name: 'Barack', tweet: '@BarackObama' }, 
      { name: 'Donald', tweet: '@realDonaldTrump' }
    ]
```
And we show this with a proprietory list via a component and component template. Template is defined inside a script tag in the html file. The script tag is marked with text/x-template and referenced by an id in your component definition.
```
JS:
Vue.component('my-list', {
  template: '#my-list',
  props: [ 'title', 'items' ]
});

HTML:
<script type="text/x-template" id="my-list">
<div class="my-list">
  <div class="title">{{ title }}</div>
  <div class="list">
    <div class="list-item" v-for="item in items">
      <slot v-bind="item"></slot>
    </div>
  </div>
</div>
</script>
```

### TODO 4 Test your understanding

1. Place a  new list in your Vue application
```
 parties: [
      { name: 'Republican Party', senators: 53, },
      { name: 'Democratic Party', senators: 45 },
      { name: 'Independent', senators: 2 }
    ]
```
2. Update you html file to show this list with the same my-list element as the tweet list.
3. Update your css to show different outlook for this list.