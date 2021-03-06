# WeTransfer Technical Assessment
#### Live App:
[http://sethjohnson.co/wt-spinner-loader/](http://sethjohnson.co/wt-spinner-loader/)
### By Seth Johnson &copy; 2020
#### Project bootstrapped with [create-react-app](https://github.com/facebook/create-react-app)

## Components

#### Index Component
`/index.js`\
Initializes application

#### App Component
`/App.js`\
Wraps application and is responsible for loader container position within window

#### Loader Container
`/components/loader-container`\
Wraps reusable spinner component and control buttons and is responsible for progress and spinning state

#### Spinner Component
`/components/spinner`\
Shows spinner and progress circles, percent completed and upload completed labels

#### Document Title
`/components/document-title`\
Updates page title for upload status visibility in the tab

#### Button
`/components/button`\
A reusable button component

## Helpers

#### Render Status Text
`/helpers/renderStatusText`\
Returns humanized text about the status of the upload

## Hooks

#### useInterval Hook
`/hooks/useInterval`\
A custom hook that makes using setInterval easier with functional components