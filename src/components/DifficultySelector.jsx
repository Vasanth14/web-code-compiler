import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Difficulty } from "../constants";

const ACTIVE_COLOR = "blue.400";

const DifficultySelector = ({ difficulty, onSelect }) => {
    return (
        <Box ml={2} mb={4}>
            <Text mb={2} fontSize="lg">
                Difficulty:
            </Text>
            <Menu isLazy>
                <MenuButton as={Button}>{difficulty}</MenuButton>
                <MenuList bg="#110c1b">
                    {Difficulty.map((level) => (
                        <MenuItem
                            key={level}
                            color={level === difficulty ? ACTIVE_COLOR : ""}
                            bg={level === difficulty ? "gray.900" : "transparent"}
                            _hover={{
                                color: ACTIVE_COLOR,
                                bg: "gray.900",
                            }}
                            onClick={() => onSelect(level)}
                        >
                            {level}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default DifficultySelector;
