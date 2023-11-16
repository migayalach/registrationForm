// LIBRARY
import Swal from "sweetalert2";
import { toast } from "react-toastify";

export const swalMessage = (message, type) => {
  Swal.fire({
    icon: type,
    title: "Oops...",
    text: message,
  });
};

export const toastSuccess = (message, type) => toast[type](message);
