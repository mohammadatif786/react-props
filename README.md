<h1>React Components with Props</h1> <br>

<h3>Overview</h3> <br>
<p>
This project demonstrates the use of <strong>React props</strong> in reusable components. 
Each component receives dynamic data via props and renders it accordingly.
</p> <br>

<h3>Installation</h3> <br>
<p>
1. Clone or open the project. <br>
2. Install dependencies by running:  
</p>

<pre>
<code>npm install</code>
</pre> <br>

<p>
3. Start the application by running:  
</p>

<pre>
<code>npm start</code>
</pre> <br>

<h3>Usage</h3> <br>
<p>
- The project contains reusable components that accept props to display dynamic content. <br>
- Below is an example of how props are used inside components.
</p> <br>

<h3>Example Components</h3> <br>

<h4>Button Component</h4> <br>
<pre>
<code>
const Button = ({ label, onClick }) => {
  return &lt;button onClick={onClick}&gt;{label}&lt;/button&gt;;
};
</code>
</pre> <br>

<p><strong>Props:</strong></p>
<ul>
  <li><code>label</code>: A string to set the button text.</li>
  <li><code>onClick</code>: A function to handle button clicks.</li>
</ul> <br>

<h4>Card Component</h4> <br>
<pre>
<code>
const Card = ({ title, description }) => {
  return (
    &lt;div className="card"&gt;
      &lt;h2&gt;{title}&lt;/h2&gt;
      &lt;p&gt;{description}&lt;/p&gt;
    &lt;/div&gt;
  );
};
</code>
</pre> <br>

<p><strong>Props:</strong></p>
<ul>
  <li><code>title</code>: A string for the card title.</li>
  <li><code>description</code>: A string for the card content.</li>
</ul> <br>

<h3>Features</h3> <br>
<ul>
  <li>Reusable React components with props</li>
  <li>Dynamic data rendering</li>
  <li>Easy to integrate and extend</li>
</ul> <br>

<h3>License</h3> <br>
<p>This project is licensed under the MIT License.</p> <br>
