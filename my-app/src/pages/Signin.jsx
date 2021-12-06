import "./Signin.css";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import {
  Box,
  Heading,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading size="lg">Log In</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form className="auth-form" onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input
                required
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormControl>
            {!isPending && (
              <Button width="full" mt={4} type="submit">
                Login
              </Button>
            )}
            {isPending && (
              <button className="btn" disabled>
                Loading...
              </button>
            )}
            {error && <div className="error">{error}</div>}
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
