import { useNavigate } from "react-router-dom";

export default function useFadeNavigate() {
  const _navigate = useNavigate();

  return (path: string) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        _navigate(path);
      });
    } else {
      _navigate(path);
    }
  };
}
