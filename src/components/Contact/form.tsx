import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import {
  AlertStatus,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import useOnScreen from "../../hooks/use-on-screen";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isAlreadyRendred, setIsAlreadyRendred] = useState(false);
  // For performance reasons, we display the reCaptcha only when the form is visible on the view
  const formRef = useRef();
  const isOnScreen = useOnScreen(formRef);

  useEffect(() => {
    if (isOnScreen) setIsAlreadyRendred(true);
  }, [isOnScreen]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const recaptchaRef = useRef(null);

  const [captchaError, setCaptchaError] = useState("");

  const toast = useToast();

  const _renderToast = (title: string, status: AlertStatus) => {
    return toast({
      title,
      status,
      position: "top",
      variant: "top-accent",
      isClosable: true,
    });
  };

  const submitForm = (data: FormData) => {
    const captchaValue = recaptchaRef.current.getValue();

    if (!isValid) return;

    if (!captchaValue) {
      setCaptchaError("Robots are not welcome yet!");
      return;
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res: Response) => {
      if (res.status === 200) {
        _renderToast("Your message has been successfully sent.", "success");
        reset();
        recaptchaRef.current.reset();
      } else {
        _renderToast("Sorry, something went wrong. Please try again.", "error");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmit((data: FormData) => submitForm(data))}
      ref={formRef}
    >
      <Stack spacing={4}>
        {/* Name */}
        <FormControl isInvalid={!!errors.name} isRequired>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" {...register("name", { required: true })} />
          {!errors.name && (
            <FormErrorMessage>Name is required.</FormErrorMessage>
          )}
        </FormControl>
        {/* Email */}
        <FormControl isInvalid={!!errors.email} isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type={"email"}
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address.",
              },
            })}
          />
          {!errors.email ? (
            <FormHelperText>
              Enter the email youd like to receive the response on.
            </FormHelperText>
          ) : errors.email?.type === "required" ? (
            <FormErrorMessage>Email is required. </FormErrorMessage>
          ) : (
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          )}
        </FormControl>
        {/* Message */}
        <FormControl isInvalid={!!errors.message} isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            size="sm"
            {...register("message", { required: true })}
          />
          {!errors.message && (
            <FormErrorMessage>Message is required.</FormErrorMessage>
          )}
        </FormControl>
        {/* ReCAPTCHA */}
        {(isOnScreen || isAlreadyRendred) && (
          <FormControl isInvalid={!!captchaError} isRequired>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LepTy0gAAAAAFMMZUoC9JWpiw71qZw3AzcyhFdF"
              onChange={(value: string) =>
                setCaptchaError(value ? "" : "Robots are not welcome yet!")
              }
              theme={colorMode === "dark" ? "dark" : "light"}
              style={{ margin: "0 auto", display: "table" }}
            />
            {!!captchaError && (
              <FormErrorMessage>{captchaError}</FormErrorMessage>
            )}
          </FormControl>
        )}
        {/* Submit button */}
        <Button
          width={"100%"}
          colorScheme="blue"
          bg="blue.400"
          color="white"
          _hover={{
            bg: "blue.500",
          }}
          type="submit"
        >
          Send Message
        </Button>
      </Stack>
    </form>
  );
};
