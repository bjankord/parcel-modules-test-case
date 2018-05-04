# parcel-modules-test-case
Test case repo demoing issue with parcel and css modules

Demo app includes `.postcssrc` which sets `modules: true` turning on CSS modules.
However, CSS modules are only applied to `app.scss`. Class names used in react components imported from packages in `node_modules` are not hashed with CSS modules.

Generated HTML:

Note: the foo class name from `app.scss` gets hashed / run CSS modules correctly.
The classes from the imported react component, (button, emphasis, text-only) are added but are not hashed via CSS modules

```html
<div class="_foo_1hhpg_1">
  <button class="button emphasis" type="button" aria-disabled="false">
    <span class="text-only">
      <span class="">Hello from React!</span>
    </span>
  </button>
</div>
```

Expected HTML output:

classes from the imported react component, (button, emphasis, text-only) are added and hashed via CSS modules being turned on in `.postcssrc` file.

```html
<div class="_foo_1hhpg_1">
  <button class="_button_2jjfa_1 _emphasis_1ffga_2" type="button" aria-disabled="false">
    <span class="_text-only_1jafa_1">
      <span class="">Hello from React!</span>
    </span>
  </button>
</div>
```
