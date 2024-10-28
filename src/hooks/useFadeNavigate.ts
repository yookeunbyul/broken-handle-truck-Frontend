import { NavigateOptions, To, useNavigate } from "react-router-dom";

export default function useFadeNavigate() {
  const navigate = useNavigate();

  return (to: string | number, options: NavigateOptions = {}) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(to as To, options);
      });
    } else {
      navigate(to as To, options);
    }
  };
}
