### This fork has some new features:
- Validate bundleID to match requirements for Android; [by [@strdr4605](https://github.com/strdr4605)]
- Change package name for other java files; (by @strdr4605) [by [@strdr4605](https://github.com/strdr4605)]

Fork from: https://github.com/junedomingo/react-native-rename

Rename react-native app with just one command

![react-native-rename](https://cloud.githubusercontent.com/assets/5106887/24444940/cbcb0a58-149a-11e7-9714-2c7bf5254b0d.gif)

> This package assumes that you created your react-native project using `react-native init`.

**Note:** This package does not attempt to properly rename build artifacts such as `ios/build` or Cocoa Pod installation targets. After renaming your project you should clean, build, and reinstall third party dependencies to get it running properly with the new name.

## Installation
```
npm install react-native-rename-next -g
```

Switch to new branch first
> better to have back-up

```
git checkout -b rename-app
```

## Usage
```
react-native-rename-next <newName>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)
```
react-native-rename-next <newName> -b <bundleIdentifier>
```

## Example
```
react-native-rename-next "My App"
```
> With custom Bundle Identifier
```
react-native-rename-next "My App" -b io.github.mayconmesquita.myapp
```

<a href="https://www.buymeacoffee.com/mayconmesquita"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;"  target="_blank"></a>