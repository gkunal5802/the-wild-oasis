import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ email, password, fullName }) =>
      signupApi({ email, password, fullName }),

    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "New Account successfully created! Please verify new account through user's email"
      );
    },

    onError: () => toast.error("There was an error while creating new account"),
  });

  return { signup, isLoading };
}
