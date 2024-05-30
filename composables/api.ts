import { useLoadingStore } from "./../stores/loadingStore";
import axios from "axios";

export const useApi = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const sweetAlert = useSweetAlert();
  const loadingStore = useLoadingStore();

  let axiosInstance = axios.create({
    baseURL: baseURL,
  });

  axiosInstance.interceptors.request.use(
    function (config) {
      loadingStore.isLoading = true;
      return config;
    },
    function (error) {
      loadingStore.isLoading = false;
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    function (response) {
      loadingStore.isLoading = false;
      return response;
    },
    function (error) {
      loadingStore.isLoading = false;
      if (error?.response && error?.response?.status) {
        if (error.response.status === 400 && error?.response?.data) {
          let msg: string | Array<String> =
            error?.response?.data?.message || "";
          msg = Array.isArray(msg) ? msg.join(",") : msg;
          sweetAlert.warningAlert(msg);
        }
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};
