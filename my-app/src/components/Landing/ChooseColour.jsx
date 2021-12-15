import { Box, Text } from "@chakra-ui/react"

/**
 * @author Khorram Khondkar
 * @param {String, Number} bgColor, width props 
 * @returns ColourChooser UI
 */
export const ChooseColour = (props) => {
    const {bgColor} = props;
    return (
        <Box bg={bgColor} w={8} textAlign={'center'}>
            <Text borderWidth={2} borderColor={'black'}>
                A
            </Text>
        </Box>
    )
}