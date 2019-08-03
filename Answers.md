# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

-there are few problems that react tries to solve and one of the is performance optimization. DOM manipulation is faster with react. It renders web pages faster by using the concept called the virtual DOM. Also everything can be split to components which gives the developors the power to write reusabel code.

1. What does it mean to think in react?

-in react data is passed through each components so a developer need to have a good map of UI component heirarchy to accomodate how the data flows through the UI

1. Describe state.

-determines how the component renders or behave. it usually determines how the data is going to be mutated

1. Describe props.

-props is the data that is being passed down from parent to child components. It is often the state in the parent component get passed down as props to the child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

-side effect can be something like a network request or it can be something subtle like chang the value of an existing variable. We usually use useEffect in react
