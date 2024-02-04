export const useFavoritesVehicles = defineStore("favorites-vehicles", {
  state: () => ({
    favoriteVehicles: [] as IVehicle[],
  }),
  getters: {
    getFavoriteVehicles: (state) => state.favoriteVehicles,
  },
  actions: {
    addFavoriteVehicle(vehicle: IVehicle) {
      if (!this.favoriteVehicles.some((_vehicle) => _vehicle.id === vehicle.id)) {
        this.favoriteVehicles.push(vehicle);
      }
    },
    removeFavoriteVehicle(vehicleId: string) {
      this.favoriteVehicles = this.favoriteVehicles.filter(
        (vehicle) => vehicle.id !== vehicleId
      );
    },
  },
});
