interface Coordinates {
  latitude: number;
  longitude: number;
}

export const useMyLocation = (setMapCenter: (coords: Coordinates) => void) => {
  const myLocation = () => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  };

  const successHandler = (res: GeolocationPosition) => {
    const { latitude, longitude } = res.coords;
    // console.log(latitude, longitude);
    setMapCenter({ latitude, longitude });
  };

  const errorHandler = (err: GeolocationPositionError) => {
    console.log(err);
  };

  return { myLocation };
};
