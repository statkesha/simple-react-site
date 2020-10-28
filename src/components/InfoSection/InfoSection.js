import React from "react";
import {Button, Container} from "../../globalStyles";
import {InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    Heading,
    Subtitle,
    TopLine,
    Img,
    ImgWrapper} from "./InfoSection.elements";
import {Link} from 'react-router-dom';

const InfoSection = ({primary,
                         lightBg,
                         imgStart, topLine, lightTopLine,
                         lightTextDesc,
                         buttonLabel,
                         description,
                         headline,
                         lightText,
                         img,
                         alt,
                         start}) => {
    return(
        <>
        <InfoSec lightBg={lightBg}>
        <Container>
            <InfoRow imgStart={imgStart}>
       <InfoColumn>
        <TextWrapper>
        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
        <Heading lightText={lightText}>{headline}</Heading>
        <Subtitle lightTextDesc = {lightTextDesc}>{description}</Subtitle>
        <Link to='/sign-up'>
        <Button big fontBig primary={primary}>
        {buttonLabel}
        </Button>
        </Link>
        </TextWrapper>
        </InfoColumn>
        <ImgWrapper>
        <Img src={img} alt={alt} />
        </ImgWrapper>
        </InfoRow>
        </Container>
        </InfoSec>
        </>
    )
}
export default InfoSection