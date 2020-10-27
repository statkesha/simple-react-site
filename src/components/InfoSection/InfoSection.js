import React from "react";
import {Button, Container} from "../../globalStyles";
import {InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
Heading,
Subtitle} from "./InfoSection.elements";
import {Link} from 'react-router-dom';

const InfoSection = ({primary,
                         lightBg,
                         imgStart,
                         lightTextDesc,
                         buttonLabel,
                         description,
                         headline,
                         lightText}) => {
    return(
        <>
        <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
       <InfoColumn>
        <TextWrapper>
        <Heading lightText={lightText}>{headline}</Heading>
        <Subtitle lightTextDesc = {lightTextDesc}>{description}</Subtitle>
        <Link to='/sign-up'>
        <Button big fontBig primary={primary}>
        {buttonLabel}
        </Button>
        </Link>
        </TextWrapper>
        </InfoColumn>
        </InfoRow>
        </Container>
        </InfoSec>
        </>
    )
}
export default InfoSection