// nS - No Space
// lC - Lowercase

export function bundleIdentifiers(currentAppName, newName, projectName, currentBundleID, newBundleID, newBundlePath) {
  const nS_CurrentAppName = currentAppName.replace(/\s/g, '');
  const nS_NewName = newName.replace(/\s/g, '');
  const lC_Ns_CurrentBundleID = currentBundleID.toLowerCase();
  const lC_Ns_NewBundleID = newBundleID.toLowerCase();
  const lC_Ns_NewBundleIDPrefix = lC_Ns_NewBundleID
    .split('.')
    .slice(0, -1)
    .join('.');

  return [
    {
      regex: currentBundleID,
      replacement: newBundleID,
      paths: ['android/app/BUCK', 'android/app/build.gradle', 'android/app/src/main/AndroidManifest.xml'],
    },
    {
      regex: currentBundleID,
      replacement: newBundleID,
      paths: [`${newBundlePath}/MainActivity.java`, `${newBundlePath}/MainApplication.java`],
    },
    {
      regex: lC_Ns_CurrentBundleID,
      replacement: lC_Ns_NewBundleID,
      paths: [`${newBundlePath}/MainApplication.java`],
    },
    {
      // App name (probably) doesn't start with `.`, but the bundle ID will
      // include the `.`. This fixes a possible issue where the bundle ID
      // also contains the app name and prevents it from being inappropriately
      // replaced by an update to the app name with the same bundle ID
      regex: new RegExp(`(?!\\.)(.|^)${nS_CurrentAppName}`, 'g'),
      replacement: `$1${nS_NewName}`,
      paths: [`${newBundlePath}/MainActivity.java`],
    },
    {
      // Change Bundle ID in iOS (project.pbxproj)
      regex: currentBundleID,
      replacement: newBundleID,
      paths: ['ios/' + nS_NewName + '.xcodeproj/project.pbxproj'],
    },
    {
      // Change default Bundle ID prefix in iOS (project.pbxproj)
      regex: `com.facebook.REACT.${nS_CurrentAppName}`,
      replacement: newBundleID,
      paths: ['ios/' + nS_NewName + '.xcodeproj/project.pbxproj', `ios/${nS_NewName}/Info.plist`],
    },
    {
      // Change default tvOS related Bundle ID prefix in iOS (project.pbxproj)
      regex: /org\.reactjs\.native\.example\.\$\(PRODUCT_NAME:rfc1034identifier\)/g,
      replacement: `${lC_Ns_NewBundleIDPrefix}.$(PRODUCT_NAME:rfc1034identifier)`,
      paths: ['ios/' + nS_NewName + '.xcodeproj/project.pbxproj', `ios/${nS_NewName}-tvOSTests/Info.plist`],
    },
  ];
}
