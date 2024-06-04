// import React, { useEffect, useRef, useState } from 'react';
// import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import { locationPermission, getCurrentLocation } from '../components/HelperFunction'
// import {
//     View,
//     Text, StyleSheet,
//     TouchableOpacity, Dimensions,
//     Image, Platform, PermissionsAndroid,
//     BackHandler
// } from 'react-native';

// const screen = Dimensions.get('window');
// const ASPECT_RATIO = screen.width / screen.height;
// const LATITUDE_DELTA = 0.04;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const GOOGLE_MAP_KEY = 'AIzaSyAI82QS22QDadYFuVzKtzOSXHUne5uak74';

// const Location = ({ route }) => {

//     const location = route.params.location;

//     const [state, setState] = useState({
//         curLoc: {
//             latitude: location.latitude,
//             longitude: location.longitude,
//         },
//     });

//     const { curLoc, locationPermissionGranted } = state;
//     const mapRef = useRef(null);



//     useEffect(() => {
//         checkLocationPermission();
//     }, []);


//     const checkLocationPermission = async () => {
//         const granted = await locationPermission();
//         updateState({ locationPermissionGranted: granted === 'granted' });
//         if (granted === 'granted') {
//             updateState({ locationPermissionGranted: true });
//             getLiveLocation();
//         } else if (Platform.OS === 'android') {
//             requestLocationPermissionAndroid();
//         }
//     };

//     // Function to request location permission on Android
//     const requestLocationPermissionAndroid = async () => {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                     title: 'Location Permission',
//                     message: 'This app requires access to your location.',
//                     buttonPositive: 'OK',
//                 }
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 updateState({ locationPermissionGranted: true });
//                 getLiveLocation();
//             } else {
//                 updateState({ locationPermissionGranted: false });
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     };

//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (locationPermissionGranted) {
//                 getLiveLocation();
//             }
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [locationPermission]);

//     const getLiveLocation = async () => {
//         try {
//             if (locationPermission) {
//                 const { latitude, longitude, heading } = await getCurrentLocation();
//                 const userId = user?.userId

//                 updateState({
//                     heading: heading,
//                     curLoc: { latitude, longitude },
//                 });
//                 updateUserLocationInDatabase(userId, latitude, longitude)
//                 console.log(latitude, longitude);
//             }
//         } catch (err) {
//             console.error("Error getting live location : ", err);
//         }
//     };


//     const onCenter = () => {
//         mapRef.current.animateToRegion({
//             latitude: curLoc.latitude,
//             longitude: curLoc.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA
//         });
//     };

//     const fetchTime = (d, t) => {
//         updateState({
//             distance: d,
//             time: t
//         });
//     };


//     return (
//         <View style={styles.container}>
//             <MapView
//                 ref={mapRef}
//                 style={StyleSheet.absoluteFill}
//                 initialRegion={{
//                     ...curLoc,
//                     latitudeDelta: LATITUDE_DELTA,
//                     longitudeDelta: LONGITUDE_DELTA,
//                 }}
//             >
//                 <Marker
//                     coordinate={curLoc}
//                     anchor={{ x: 0.5, y: 0.5 }}
//                     flat={true}
//                 >
//                     <View style={styles.marker}>
//                         <View style={styles.dot} />
//                     </View>
//                 </Marker>
//             </MapView>

//             <MapViewDirections
//                 origin={curLoc}
//                 destination={{
//                     latitude: location.latitude,
//                     longitude: location.longitude
//                 }}
//                 apikey={GOOGLE_MAP_KEY}
//                 strokeWidth={4}
//                 strokeColor="blue"
//                 optimizeWaypoints={true}
//             />

//             <TouchableOpacity
//                 style={{
//                     position: 'absolute',
//                     top: 0,
//                     right: 0
//                 }}
//                 onPress={onCenter}
//             >
//                 <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS686zXIz8wxhcaW-yBNuncl3rA1A9Ya_2Jng&s"}} />
//             </TouchableOpacity>

//         </View>
//     );
// };

// export default Location;

// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     marker: {
//         width: 24,
//         height: 24,
//         borderRadius: 12,
//         backgroundColor: 'rgba(0, 122, 255, 0.3)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     dot: {
//         width: 10,
//         height: 10,
//         borderRadius: 5,
//         backgroundColor: 'blue',
//     },
// });

import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { locationPermission, getCurrentLocation } from '../components/HelperFunction';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    Platform,
    PermissionsAndroid,
} from 'react-native';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAP_KEY = 'AIzaSyAI82QS22QDadYFuVzKtzOSXHUne5uak74';

const Location = ({ route }) => {
    const location = route.params.location;
    const mapRef = useRef(null);

    const [curLoc, setCurLoc] = useState({
        latitude: 6.32,
        longitude: 80.25,
    });

    // const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

    // useEffect(() => {
    //     checkLocationPermission();
    // }, []);

    // useEffect(() => {
    //     if (locationPermissionGranted) {
    //         const interval = setInterval(() => {
    //             getLiveLocation();
    //         }, 5000);
    //         return () => clearInterval(interval);
    //     }
    // }, [locationPermissionGranted]);

    // const checkLocationPermission = async () => {
    //     const granted = await locationPermission();
    //     if (granted === 'granted') {
    //         setLocationPermissionGranted(true);
    //         getLiveLocation();
    //     } else if (Platform.OS === 'android') {
    //         requestLocationPermissionAndroid();
    //     }
    // };

    // const requestLocationPermissionAndroid = async () => {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    //             {
    //                 title: 'Location Permission',
    //                 message: 'This app requires access to your location.',
    //                 buttonPositive: 'OK',
    //             }
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             setLocationPermissionGranted(true);
    //             getLiveLocation();
    //         } else {
    //             setLocationPermissionGranted(false);
    //         }
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };

    // const getLiveLocation = async () => {
    //     try {
    //         if (locationPermissionGranted) {
    //             const { latitude, longitude } = await getCurrentLocation();
    //             setCurLoc({ latitude, longitude });
    //             console.log(latitude, longitude);
    //         }
    //     } catch (err) {
    //         console.error("Error getting live location: ", err);
    //     }
    // };

    const onCenter = () => {
        mapRef.current.animateToRegion({
            latitude: curLoc.latitude,
            longitude: curLoc.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        });
    };

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={StyleSheet.absoluteFill}
                initialRegion={{
                    ...curLoc,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
            >
                <Marker coordinate={curLoc}>
                    <View style={styles.marker}>
                        <View style={styles.dot} />
                    </View>
                </Marker>

                <MapViewDirections
                    origin={curLoc}
                    destination={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                    }}
                    apikey={GOOGLE_MAP_KEY}
                    strokeWidth={4}
                    strokeColor="blue"
                    optimizeWaypoints={true}
                />
            </MapView>

            <TouchableOpacity
                style={styles.centerButton}
                onPress={onCenter}
            >
                <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS686zXIz8wxhcaW-yBNuncl3rA1A9Ya_2Jng&s" }} style={styles.centerButtonImage} />
            </TouchableOpacity>
        </View>
    );
};

export default Location;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    marker: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(0, 122, 255, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        // backgroundColor: 'blue',
        backgroundColor: 'red'
    },
    centerButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 10,
        elevation: 5,
    },
    centerButtonImage: {
        width: 30,
        height: 30,
    },
});

// import React, { useEffect, useRef, useState } from 'react';
// import MapView, { Marker } from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';
// import { locationPermission, getCurrentLocation } from '../components/HelperFunction';
// import {
//     View,
//     StyleSheet,
//     TouchableOpacity,
//     Dimensions,
//     Image,
//     Platform,
//     PermissionsAndroid,
// } from 'react-native';

// const screen = Dimensions.get('window');
// const ASPECT_RATIO = screen.width / screen.height;
// const LATITUDE_DELTA = 0.04;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// const GOOGLE_MAP_KEY = 'AIzaSyAI82QS22QDadYFuVzKtzOSXHUne5uak74';

// const Location = ({ route }) => {
//     const location = route.params.location;
//     const mapRef = useRef(null);

//     const [curLoc, setCurLoc] = useState({
//         latitude: 6.32,
//         longitude: 80.25,
//     });

//     const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

//     useEffect(() => {
//         checkLocationPermission();
//     }, []);

//     useEffect(() => {
//         if (locationPermissionGranted) {
//             const interval = setInterval(() => {
//                 getLiveLocation();
//             }, 5000);
//             return () => clearInterval(interval);
//         }
//     }, [locationPermissionGranted]);

//     const checkLocationPermission = async () => {
//         const granted = await locationPermission();
//         if (granted === 'granted') {
//             setLocationPermissionGranted(true);
//             getLiveLocation();
//         } else if (Platform.OS === 'android') {
//             requestLocationPermissionAndroid();
//         }
//     };

//     const requestLocationPermissionAndroid = async () => {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                 {
//                     title: 'Location Permission',
//                     message: 'This app requires access to your location.',
//                     buttonPositive: 'OK',
//                 }
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 setLocationPermissionGranted(true);
//                 getLiveLocation();
//             } else {
//                 setLocationPermissionGranted(false);
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     };

//     const getLiveLocation = async () => {
//         try {
//             if (locationPermissionGranted) {
//                 const { latitude, longitude, heading } = await getCurrentLocation();
//                 setCurLoc({ latitude, longitude });
//                 console.log(latitude, longitude);
//             }
//         } catch (err) {
//             console.error("Error getting live location: ", err);
//         }
//     };

//     const onCenter = () => {
//         mapRef.current.animateToRegion({
//             latitude: curLoc.latitude,
//             longitude: curLoc.longitude,
//             latitudeDelta: LATITUDE_DELTA,
//             longitudeDelta: LONGITUDE_DELTA,
//         });
//     };

//     return (
//         <View style={styles.container}>
//             <MapView
//                 ref={mapRef}
//                 style={StyleSheet.absoluteFill}
//                 initialRegion={{
//                     ...curLoc,
//                     latitudeDelta: LATITUDE_DELTA,
//                     longitudeDelta: LONGITUDE_DELTA,
//                 }}
//             >
//                 <Marker coordinate={curLoc}>
//                     <View style={styles.marker}>
//                         <View style={styles.dot} />
//                     </View>
//                 </Marker>

//                 <MapViewDirections
//                     origin={curLoc}
//                     destination={{
//                         latitude: location.latitude,
//                         longitude: location.longitude,
//                     }}
//                     apikey={GOOGLE_MAP_KEY}
//                     strokeWidth={4}
//                     strokeColor="blue"
//                     optimizeWaypoints={true}
//                 />
//             </MapView>

//             <TouchableOpacity
//                 style={styles.centerButton}
//                 onPress={onCenter}
//             >
//                 <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS686zXIz8wxhcaW-yBNuncl3rA1A9Ya_2Jng&s" }} style={styles.centerButtonImage} />
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default Location;

// const styles = StyleSheet.create({
//     container: {
//         ...StyleSheet.absoluteFillObject,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//     },
//     marker: {
//         width: 24,
//         height: 24,
//         borderRadius: 12,
//         backgroundColor: 'rgba(0, 122, 255, 0.3)',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     dot: {
//         width: 10,
//         height: 10,
//         borderRadius: 5,
//         backgroundColor: 'blue',
//     },
//     centerButton: {
//         position: 'absolute',
//         top: 10,
//         right: 10,
//         backgroundColor: 'white',
//         borderRadius: 25,
//         padding: 10,
//         elevation: 5,
//     },
//     centerButtonImage: {
//         width: 30,
//         height: 30,
//     },
// });
