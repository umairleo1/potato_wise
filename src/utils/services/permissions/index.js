import {Platform, PermissionsAndroid} from 'react-native';
import {request, PERMISSIONS} from 'react-native-permissions';

const requestCameraAndGalleryPermissions = async () => {
  if (Platform.OS === 'android') {
    try {
      // Request camera permission
      const cameraGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Potato Wise needs Camera Permission',
          message: 'Potato Wise needs access to your camera',
        },
      );

      // Request photo gallery permission
      const galleryGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Potato Wise needs Photo Gallery Permission',
          message: 'Potato Wise needs access to your photo gallery',
        },
      );

      if (
        cameraGranted === PermissionsAndroid.RESULTS.GRANTED &&
        galleryGranted === PermissionsAndroid.RESULTS.GRANTED
      ) {
        // Both permissions granted
        return true;
      } else {
        // At least one permission denied
        return false;
      }
    } catch (error) {
      console.error('Error requesting permissions:', error);
    }
  } else {
    // For iOS or other platforms, handle permissions accordingly
    const cameraPermission = await request(PERMISSIONS.IOS.CAMERA);
    const photoPermission = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);

    if (cameraPermission === 'granted' && photoPermission === 'granted') {
      return true; // Permissions are granted
    } else {
      return false; // Permissions are not granted
    }
  }
};

export default requestCameraAndGalleryPermissions;
