import { NavigateOptions, To, useNavigate } from "react-router-dom";

export default function useFadeNavigate() {
  const navigate = useNavigate();

  return (to: To, options: NavigateOptions = {}) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to, options);
      });
    } else {
      navigate(to, options);
    }
  };
}
