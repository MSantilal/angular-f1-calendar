# Angular

## Overview

- Platform and Framework for building SPA using HTML and TypeScript
- Component based framework for building scalable web apps
  - All items are components
  - Includes:
    - Routing
    - Forms management
    - Client/Server Comms
    - Suite of Developer Tools to:
      - Develop
      - Build
      - Test
      - Update
- Supported by Google
- Uses TypeScript based on JavaScript
- Declarative UI
  - Every UI is declared so can be worked on in isolation
- Supports PWA and SPA
  - Progressive Web App (PWA)
  - Single Page App (SPA)
- Simplified MVC Pattern

## Items to Note

- `ng --help`
  - Outlines all the commands available in Angular for use via the CLI
- `ng serve`
  - Available for use locally in the project directory rather than globally. In most cases, we're usually working from the project directory anyway.
    - More likely used for CI/CD pipelines?

## App Configuration

### TypeScript Configuration Files

- `tsconfig.json`
  - For TypeScript language related changes
- `tsconfig.app.json`
  - For main app related settings
- `tsconfig.spec.json`
  - For test file settings
- `package.json`
  - Contains all dependencies required for development/production
  - TypeScript only required for dev as code compiles to JavaScript
  - `npm install` installs both dev and app based dependencies
  - Does not contain exact version, this is available in `package-lock.json`
  - `angular.json` used mostly by the angular system to describe it to the compiler

## Source Files

- `main.ts`
  - Start all processes from here
  - Angular is a modular system therefore each component is an individual module
- `environment.ts`
  - Outlines all the environments available for the app to use.
  - These can be prod/non-prod/local
- `app.module.ts`
  - The `@NgModule({})` has a decorator added to 'AppModule' which provides metadata regarding what the role of the module is.

### App Module

- AppModule is the base layer and acts as the module defining the app itself.
- Provides declarations for `components` such as `AppComponent` which is a single component that defines a particular item that can be brought together in the full app.
  - e.g. the title bar for example can be brought into the full app
- Provides details for external `imports` that will be used by the app for code
- Provides bootstrapping data to ensure what the first item to be loaded will be.
- Each app must have a root module file, otherwise angular doesn't actually know what to run.

#### App.component.ts

- Components are the main building block for Angular applications. Each component consists of:

- An HTML template that declares what renders on the page
- A TypeScript class that defines behaviour (i.e. the 'code-behind')
- A CSS selector that defines how the component is used in a template
- Optionally, CSS styles applied to the template
- The `selector` param defines how it will be called by the `index.html` in the HTML code.
  - Can be defined in a `div` by setting the selector as `'.app-root'`

### Styles

- Two types are available.
- Local
  - Focus purely on a component level
- Global
  - Available throughout the app

### App and Books Component

- Within in `app.component`, the `books.component` can be added since they're declared in the same module.
- Otherwise, this needs to be imported before it can ben used.

## Bindings

### Interpolation

- Interpolation is the embedding of expressions into marked up text.
- Uses `{{ curly braces }}` by default.
- Works like the string format function in dotnet

### Property Binding

- Again, similar to interpolation
- Acts similarly to binding in WPF
- Replaces `<img src={{item.Value}}...` to `<img [src]=src...`
- Used for dynamic state change of elements on the page
- Recommended to be used at all times

### Event Binding

- Lets you listen for user action and respond to actions such as keystrokes, mouse movements, clicks and/or touches
- Used by `(input)="handleClick()"`

### Two-Way Binding

- Provides components in your app a way to share data
- Used to listen for events and update values simultaneously between parent / child components
- Used by `[(ngModel)]="targetName"` in html code

## Directives

Classes which add additional behaviour to elements in the angular applications. These are used to manage forms, lists, styles and what users can/cannot see.

### Component

- Used with a template

### Attribute

- Change appearance or behaviour of an element, component or another directive
- Examples
  - NgClass
    - Going to change/add/remove HTML classes in template
  - NgStyle
    - Changing styles
  - NgModel
    - Helps on two-way binding

### Structural Directives

- Change the DOM layout by adding and removing DOM elements.
- Require a prefix of `*` to be used
- Examples
  - ngIf
    - Used as usual `if` statements.
    - In template, utilise `<ng-container>` to not have the hidden item showing up in html source.
  - ngFor
    - Used as usual `for` statements
  - ngSwitch

## Pipes

Simple functions to use with template expressions to accept an input value and return a transformed value. Can be declared once but used throughout the application. E.g. Date from 10/01/2001 to be 10th Jan 2001.

Further Information can be found [here](https://angular.io/api/core/Pipe)

## Styling

Usually styling is to be carried out via the browser using the inspect tooling as this provides a quicker way to style the necessary components. These can then be added to the `.css` file.

### Styling to Note

- Display: flex
  - Flexible across the screen
- Flex-wrap: wrap
  - Wrap the list when space isn't available

## Parent to Child / Child to Parent Relationships

- Each major part of a component should be specialised into it's own component. See Race Calendar into Individual Meetings
- To pass data through to child use `@Input()` decorator
- To pass data back to parent, use `@Output()` decorator with an event emitter

## Lifecycle Hooks

- Component Instance has a lifecycle that starts when ngOnInit occurs and is then destroyed when the component is removed from the DOM.
- Lifecycle continues with change detection, as Angular checks to see if any data-bound properties change and updates both view and component instance when needed.
- Common Hooks
  - ngOnChanges()
  - ngOnInit()
    - Fetch data from external API
  - ngOnDestroy()
    - Used to destroy background tasks such as timers in the component when it is removed from the DOM
  - ctor()
    - Runs first to load up the class
  - More can be found [here](https://angular.io/guide/lifecycle-hooks)

## Service

- Service is a class with a narrow well defined purpose. Should aim to do something specific and do it will. Mostly like a resolver.
- Component should focus only on user interactions, i.e. like a controller.

## Modules

- Each 'page' should ideally be it's own module. The 'page module' should then be imported in the 'app.module.ts' file to allow it pick it up for use.
- In the 'page module' provide an export which outlines which component is going to be available from this module.
- E.g. in our case, we're making Race-Calendar component available.
