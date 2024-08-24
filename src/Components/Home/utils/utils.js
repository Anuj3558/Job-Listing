import { toast } from "react-toastify";

const handleSuccess = (message) => {
  toast.success(message, {
    position: "bottom-right", // Center the toast at the top
    autoClose: 5000, // Duration to auto-close the toast
    hideProgressBar: false, // Show progress bar
    closeOnClick: true, // Close on click
    pauseOnHover: true, // Pause on hover
    draggable: true, // Allow dragging
    progress: undefined, // Progress bar color
  });
};

const handleError = (message) => {
  toast.error(message, {
    position: "top-right", // Center the toast at the top
    autoClose: 5000, // Duration to auto-close the toast
    hideProgressBar: false, // Show progress bar
    closeOnClick: true, // Close on click
    pauseOnHover: true, // Pause on hover
    draggable: true, // Allow dragging
    progress: undefined, // Progress bar color
  });
};

export { handleError, handleSuccess };
