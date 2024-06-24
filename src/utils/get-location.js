export async function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        function (error) {
          reject(error);
        },
      );
    } else {
      reject(new Error("Geolocation is not supported by your browser."));
    }
  }).catch((error) => {
    console.error("Error getting location:", error.message);
  });
}
