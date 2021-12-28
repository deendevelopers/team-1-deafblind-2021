import { Box } from "@chakra-ui/react"
import { AdjustTextSize } from "./AdjustTextSize"
import { SelectTextColor } from "./ChooseColour"
import { VoiceOver } from "./VoiceOver"

/**
 * @author Khorram Khondkar
 * @param {Object} props 
 * @returns Accessibility Option
 */
export const TopBar = (props) => {
    return (
        <Box display={'flex'} 
            justifyContent={'space-between'} 
            px={20} 
            py={6} 
            border 
            borderBottomWidth={2}>
                <VoiceOver/>
                    <Box>
                        <SelectTextColor/>
                    </Box>
                <Box display={'flex'}>
                    <AdjustTextSize/>
                    <AdjustTextSize/>
                    <AdjustTextSize/>
                </Box>
            
        </Box>
    )
}