import React from "react";
import {FooterContainer,
    FooterSubHeading,
    FooterSubscription,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink} from "./Footer.elements";
import {Button} from "../../globalStyles";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/all";

const Footer = () =>{
    return(
        <FooterContainer>
        <FooterSubscription>
        <FooterSubHeading>
        Subscribe and find out about new trends and events before anyone else
    </FooterSubHeading>
    <FooterSubText>You can unsubscribe from the mailing list at any time.</FooterSubText>
    <Form>
    <FormInput name='email' type='email' placeholder='Your email' />
        <Button fontBig>Subscribe</Button>
    </Form>
    </FooterSubscription>
        <FooterLinksContainer>
    <FooterLinksWrapper>
    <FooterLinkItems>
    <FooterLinkTitle>About Us</FooterLinkTitle>
    <FooterLink to='/sign-up'>How it works</FooterLink>
    <FooterLink to='/'>Testimonials</FooterLink>
        <FooterLink to='/'>Careers</FooterLink>
        <FooterLink to='/'>Terms of Service</FooterLink>
    </FooterLinkItems>
    <FooterLinkItems>
    <FooterLinkTitle>Contact Us</FooterLinkTitle>
    <FooterLink to='/'>Contact</FooterLink>
        <FooterLink to='/'>Support</FooterLink>
        <FooterLink to='/'>Press</FooterLink>
        <FooterLink to='/'>Sponsorships</FooterLink>
        </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        <FooterLinkItems>
        <FooterLinkTitle>Support</FooterLinkTitle>
        <FooterLink to='/'>Help</FooterLink>
    <FooterLink to='/'>Forum</FooterLink>
        <FooterLink to='/'>Status</FooterLink>
        <FooterLink to='/'>Contact</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
        <FooterLinkTitle>Social Media</FooterLinkTitle>
    <FooterLink to='/'>Instagram</FooterLink>
        <FooterLink to='/'>Facebook</FooterLink>
        <FooterLink to='/'>Youtube</FooterLink>
        <FooterLink to='/'>Twitter</FooterLink>
        </FooterLinkItems>
        </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
        <SocialMediaWrap>
        <SocialLogo to='/'>
        <SocialIcon />
        wow
        </SocialLogo>
        <WebsiteRights>wow © 2020</WebsiteRights>
    <SocialIcons>
    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
        <FaFacebook />
        </SocialIconLink>
        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
        <FaInstagram />
        </SocialIconLink>
        <SocialIconLink
    href={'/' }
    rel='noopener noreferrer'
    target='_blank'
    aria-label='Youtube'
        >
        <FaYoutube />
        </SocialIconLink>
        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
        <FaTwitter />
        </SocialIconLink>
        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
        <FaLinkedin />
        </SocialIconLink>
        </SocialIcons>
        </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
);
}

export default Footer;