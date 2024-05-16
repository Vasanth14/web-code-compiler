import CodeEditor from "./components/CodeEditor";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Center>
        <Heading>Rust Compiler</Heading>
      </Center>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <CodeEditor />
      </Box>
    </>
  );
}

export default App;
