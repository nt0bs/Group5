# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Frontend 'README.md'

```markdown
# Job Listing App Frontend

This is the frontend for the Job Listing Application, built using React. It interacts with the Flask backend API to display, add, update, and delete job listings.

# Contributors

Cynthia Mokasi - Frontend , Home page, and UI/UX, basic styling
Modisa Ntobeng - React set-up, Source Control (Git) and project structure and maintainance, Add job page
Khanyisile Buthelezi - Addjob page
Primrose Dube - Navbar page
Lethukuthula Mkhonto - Job Listing and Styling Page

## Features

- Responsive design for managing job listings.
- Axios for making API requests to the backend.
- React Router for navigation between pages.
- Dynamic form validation for adding and editing jobs.

## Requirements

Make sure you have the following installed:

- Node.js (v14 or above)
- npm (Node package manager)

## Getting Started

### 1. Clone the Repository
If you have cloned the Group5 repository, the frontend folder is part of the repository just call it in your terminal:
```bash
cd Group5/frontend
```
If you have not cloned the Group5 repository, use commard below:

```bash
git clone https://github.com/nt0bs/Group5.git
```
then access the frontend using: 

```bash
cd Group5/frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure API URL
```javascript
const response = await axios.get('https://group5-1wvm.onrender.com/api/jobs');
```

### 4. Run the Frontend

```bash
npm start
```

#### 1. Key Notes:
- *** One Repo:** The backend and the frontend are in their repective folders, each with their `README.md` describing  the relevant setup and instructions for the frontend or backend.
- **API URLs:** For the frontend, the API URLs  point to the correct deployed backend URL.