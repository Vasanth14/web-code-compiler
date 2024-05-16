import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import { difficultyCode } from "../constants";
import Output from "./Output";
import DifficultySelector from "./DifficultySelector";

import { Flex } from "@chakra-ui/react";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("rust");

  const [difficulty, setDifficulty] = useState("easy");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  const onSelectDifficulty = (difficulty) => {
    setDifficulty(difficulty)
    setValue(difficultyCode[difficulty])
  }

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="50%">
          <Flex minWidth="max-content" alignItems="center" gap="5">
            <LanguageSelector language={language} onSelect={onSelect} />
            <DifficultySelector difficulty={difficulty} onSelect={onSelectDifficulty} />
          </Flex>

          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="75vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        <Output editorRef={editorRef} language={language} />
      </HStack>
    </Box>
  );
};
export default CodeEditor;
