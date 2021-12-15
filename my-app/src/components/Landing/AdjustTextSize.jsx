import { Box, Text } from "@chakra-ui/react"

/**
 * @author Khorram Khondkar
 * @param {Number}  textSize props 
 * @returns TextSize UI
 */
export const AdjustTextSize = (props) => {
    const {textSize} = props;
    const sizeOfFont = textSize | 20;

    return (
        <Box fontSize={sizeOfFont}>
            <Text>
                A
            </Text>
        </Box>
    )
}