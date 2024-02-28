# Home

Repository of common vue3 components that can be imported into department projects.

### Installation

$ npm install @dbca/gov-vue3-components

Currently this component library requires bootstrap 5 and that the project is using webtemplate_dbca (for the chevron javascript)

Then import and use the plugin in main.js:

#### **`main.js`**
```javascript
    ...

    import GovVue3ComponentsPlugin from '@dbca/gov-vue3-components';
    import '@dbca/gov-vue3-components/dist/assets/library-DJ5wR63R.css';

    ...

    const app = createApp(App)
    app.use(GovVue3ComponentsPlugin)
```

Now you can use all of the components anywhere in your project without having to import them.
