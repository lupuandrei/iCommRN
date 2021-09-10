# iCommRN

## TODO

1. Update product details from product list reducer

## Improvements & Warnings

1. Filter products by category
2. Infinite scroll on product list
3. Refresh product list
4. Resize product image using the param query string **imwidth**
5. TabBar icon change tint when the tab is active
6. The first product's [image](image http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024) has **http** instead of **https** on iOS. For that **Info.plis** was modified and there was added **cdn-img.prettylittlething.com** in _App Transport Security Settings > Exception Domains_
7. _Warning: EventEmitter.removeListener('change', ...): Method has been deprecated_ is an warning from [react-native-flash-message](https://github.com/lucasferreira/react-native-flash-message/issues/176)

## How to install

1. Install packages

   1. Install node modules: `npm install`
   2. Install iOS pods: `cd ios && pod install`

2. React Native start server
   `npx react-native start --reset-cache`

3. Open the project in Xcode / Android studio
   1. iOS: open **iCommRN.xcworkspace**
   2. Android: open `/android` platform
4. Run

## Dependencies

### 1. React Redux

> Library: [react-redux](https://react-redux.js.org)

### 2. Aync-Storage

> Library: [@react-native-community/async-storage](https://react-native-community.github.io/async-storage/docs/usage)

### 3. Moment JS

> Library: [moment-js](https://momentjs.com/)

### 4. React Native Elements

> Library: [react-native-elements](https://reactnativeelements.com/)

### 5. Redux thunk

> Library: [redux-thunk](https://github.com/reduxjs/redux-thunk)

### 6. Redux logger

> Library: [redux-logger](https://github.com/LogRocket/redux-logger)

### 7. Redux persist

> Library: [redux-persist](https://github.com/rt2zz/redux-persist)

### 8. React Native Navigation

> Library: [react-native-navigation](https://reactnavigation.org/docs/getting-started/)

### 9. React Native Flash Message

> Library: [react-native-flash-message](https://github.com/lucasferreira/react-native-flash-message)

### 10. Axios

> Library: [axios](https://www.npmjs.com/package/axios)

### 11. Overlay Spinner

> Library: [react-native-loading-spinner-overlay](https://www.npmjs.com/package/react-native-loading-spinner-overlay)

### 12. Fit Image

> Library: [react-native-fit-image](https://github.com/huiseoul/react-native-fit-image)

### 13. Vector Icons

> Library: [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
