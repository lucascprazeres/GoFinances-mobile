<h1 align=center>
  💲 GoFinances 💲
</h1>

<h3 align=center>
  Manage your transactions intelligently
</h3>

<h2>Project Preview 🚀</h2>

<div align=center>
  <img width="250" src=".github/gofinances.gif"/>
</div>

<h2>About 🕵️</h2>

<p>GoFinances is a great alternative for tracking financial transactions. It provides a detailed description of the records created and a balance of values in a simple and elegant way.<p>

<h2>Technologies Used 🤯</h2>

<ul>
  <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://styled-components.com/docs/basics">Styled-components</a></li>
  <li><a href="https://reactnavigation.org/">React-Navigation</a></li>
</ul>

<h2>Software Requirements 🔍</h2>

<li><a href="https://yarnpkg.com/">Install Yarn</a></li>
<li><a href="https://react-native.rocketseat.dev/">Install and configure Android Studio (optional)</a></li>
<li><a href="https://github.com/lucascprazeres/GoFinances-server">Download and set up the application backend</a></li>

<h2><strike>Don’t</strike> Try This at Home! ⚠️</h2>

<p>To run the project, execute the following commands in your terminal with Git</p>

```bash
  # Clone the repository

  git clone <repository-link>

  # Navigate to the project folder and install the dependencies

  cd GoFinances-mobile && yarn

  # Start the Metro Bundler

  yarn start

  # In another terminal, run

  yarn android # or yarn ios
```

<p><em>Note: It is very important to have the backend running before you start the app.</em></p> 

<h3><li> Author's Note</li></h3> 

<p>Inside the project folder, in src/services/api.ts, you'll find the configuration that connects the app to the backend. It looks like this:</p>

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://<um-ip-qualquer>:3333/',
});

export default api;
```

<p>If you're running the project within Android Studio, replace the "some-ip" field (along with the angle brackets) with "10.0.2.2," which corresponds to localhost within the platform. However, if you decide to run the app on a physical device, replace this field with your computer's current IP address. </p> 

<h2>How to Contribute? 😍</h2> 

<p>In addition to starring the repository ⭐ to increase its visibility, you can fork the project, follow the steps above, and</p>

```bash
# Inside your fork's folder, create a branch to make your changes

git checkout -b <your-branch>

# Make your changes
# ...

# Commit your changes

git add .
git commit -m 'describe what you did'

# Push your changes

git push origin <your-branch>
```

<h2>📝 License</h2> 

This project is licensed under the <strong>MIT</strong> License. For more details, see the <strong>LICENSE</strong> file. 

<hr> 

<p align=center>Made with 💜 by <a href="https://www.linkedin.com/in/lucas-prazeres/">Lucas dos Prazeres</a><p> 
