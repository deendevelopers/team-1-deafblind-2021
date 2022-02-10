import { Box, Button, Text } from "@chakra-ui/react"

/**
 * @author Khorram Khondkar
 * @param {String, Number} bgColor, width props 
 * @returns ColourChooser UI
 */
 const ChooseColour = (props) => {
    const {bgColor, textColor} = props;
    return (
        <Button bg={bgColor} 
                w={8} 
                ml={2}
                textAlign={'center'} 
                borderColor={'black'} 
                borderWidth={3}
                borderRadius={0}
                color={textColor}
                onClick={props.onClick}>
            A
        </Button>
        
    )
};

export const SelectTextColor = (props) => {
    const {selectedColor} = props;
    const colors = [
        {
            bg: '#FFFFFF',
            textColor: '',
        }, 
        {
            bg: '#CFCC90',
            textColor: '',
        },
        {
            bg: '#164B60',
            textColor: '#CFCC90',
        },
        {
            bg: '#434343',
            textColor: '#FFFFFF',
        },
    ];

    return (
       <Box display={'flex'} 
            flexDirection={'row'} 
            justifyItems={'center'} 
            flexWrap={'nowrap'}>
                <Text>
                    Adjust colour differentiation
                </Text>
           <Box  ml={3}>
                {colors.map((color) => {
                    return (
                        <ChooseColour bgColor={color.bg} 
                                    textColor={color.textColor}
                                    onClick={selectedColor}/>
                    )
                })}
           </Box>
           
       </Box>
    )
};

ChooseColour.defaultProps = {
    bgColor: 'white'
};