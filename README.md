# Course Registration React Project

This is a basic react project made for only educational purpose , which elaborates the usage of react basic concepts.

## 3 Features of this project
**Feature-1**: You can add any course here by clicking the select button, it is gonna show the title of the course  on the sidebar as well as contianing all the necessary information about the course you select , Just like the price and the credit hour information.

**Feature-2**: You can only take courses upto 20 credits and you will see the total price of the coureses you have selected . You will also see the remaining credit that are left for you to take.

**Feature-3**: In this project there is a unique feature that you can only take a single course and the project will not allow you to take a single course twice.

## How I managed the state in my assignment project.

***State Management*** - States are built in objects in react where we can contain data and information about a component . Here i have to manage multiple states here to contain data that I want to display in the project , more specifically updating the sidebar content . We can noitce that the select button here is a event trigger button which eventually calls a function , so we created multiple states in the app component and managed the states with event handler . App component is the only common component or we can say a parent component of both cards and sidebar component . So by declaring a state in the common parent component both of  the child components can access or share the same state and display data . 