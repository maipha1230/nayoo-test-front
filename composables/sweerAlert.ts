import Swal from "sweetalert2";

export const useSweetAlert = () => {
  const successAlert = (msg: string) => {
    return Swal.fire({
      title: "Success",
      icon: "success",
      text: msg || "",
      timer: 5000,
    });
  };

  const warningAlert = (msg: string) => {
    return Swal.fire({
      title: "Waring",
      icon: "warning",
      text: msg || "",
      timer: 5000,
      showCloseButton: true,
      closeButtonAriaLabel: "ปิด",
    });
  };

  const ensureAlert = (msg: string) => {
    return Swal.fire({
      title: "Are you sure ?",
      icon: "question",
      text: msg || "",
      cancelButtonText: "ไม่",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "ใช่",
    });
  };

  return {
    successAlert,
    warningAlert,
    ensureAlert
  };
};
