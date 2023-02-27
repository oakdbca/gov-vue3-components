# Home

Repository of common vue3 components that can be imported into department projects.

### Installation

$ npm install @dbca/gov-vue3-components

Then import and use the plugin in main.js:

#### **`main.js`**
```javascript
    ...

    import GovVue3ComponentsPlugin from '@dbca/gov-vue3-components';

    ...

    const app = createApp(App)
    app.use(GovVue3ComponentsPlugin)
```

Now you can use all of the components anywhere in your project without having to import them.
