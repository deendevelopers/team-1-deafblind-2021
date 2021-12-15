import { Box } from "@chakra-ui/react"
import { AdjustTextSize } from "./AdjustTextSize"
import { ChooseColour } from "./ChooseColour"
import { VoiceOver } from "./VoiceOver"

/**
 * @author Khorram Khondkar
 * @param {Object} props 
 * @returns Accessibility Option
 */
export const TopBar = (props) => {
    return (
        <Box>
            <VoiceOver/>
            <Box>
                <p>
                Adjust colour differentiation
                </p>
                {Array.fill(6).map(() => {
                    return (
                        <ChooseColour/>
                    )
                })}
            </Box>
            <AdjustTextSize/>
        </Box>
    )
}