---
id: projects
title: Projects
sidebar_label: Projects
---

Create React dependency is a monorepo composed of 2 projects:

## Create React Dependency [![npm version](https://badge.fury.io/js/create-react-dependency.svg)](https://www.npmjs.com/package/create-react-dependency)

The Create React dependency project is a simple CLI that creates a project base for creating a dependency.

### Basic Use

```
npx create-react-dependency new my-dependency
cd my-dependency
npm start
```

## React Dependency Scripts [![npm version](https://badge.fury.io/js/react-dependency-scripts.svg)](https://www.npmjs.com/package/react-dependency-scripts)

React Dependency Scripts abstracts all the settings needed to create an NPM dependency. Possessing 3 scripts, start with webpack, build with babel and test with jest.

### Scripts

The scripts look like this in the package.json file:

```json
{
  "scripts": {
    "start": "react-dependency-scripts start",
    "build": "react-dependency-scripts build",
    "test": "react-dependency-scripts test"
  }
}
```
