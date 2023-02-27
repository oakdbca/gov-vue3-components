# StatusPanel

### Basic Usage

`<StatusPanel status="Current" />` renders a simple bootstrap 5 status panel.

```vue
  <template>
    <StatusPanel status="Current" />
  </template>
```

Result:

![Status Panel](../images/status-panel.png)

badgeClass - optional, if passed will render the status in a bootstrap badge with 

```vue
  <template>
    <StatusPanel status="Current" badgeClass="success" />
  </template>
```

Result:

![Status Panel with badgeClass prop](../images/status-panel-with-badge-class.png)
