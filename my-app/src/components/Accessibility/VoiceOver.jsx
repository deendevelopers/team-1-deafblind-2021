import { Img, Box, Button } from '@chakra-ui/react';
import stickman from '../../assets/stickman.png';

/**
 * 
 * @param {boolean} toggleSwitch 
 * @returns HTML
 */
const isVoiceOn = (toggleSwitch) => {
    return toggleSwitch ? (
        <p>
            Voiceover on
        </p>
    ) : (
        <p>
            Voiceover off
        </p>
    )
}

/**
 * 
 * @param {Object} props 
 * @returns VoiceOverStatus UI
 */
export const VoiceOver = (props) => {
    const {voiceOn} = props;
    return (
        <Button display={'flex'} flexDirection={'column'} bg={'white'} justifyContent={'center'}>
            <Box px={5}>
                <Img src={stickman}/>
            </Box>
            <Box>
            {isVoiceOn(voiceOn)}
            </Box>
        </Button>
    )
}