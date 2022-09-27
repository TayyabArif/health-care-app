import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styled from 'styled-components'

const Image = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 50%; 
`
export default function ConsultationDetailCard() {
    return (
        <Card sx={{ maxWidth: 350, mr: 3, mb: 1, width: '100%', borderRadius: '20px', border: '0.5px solid grey' }}>
            <CardContent >
                <Grid container >
                    <svg style={{ marginLeft: "-45px;" }} width="69" height="72" viewBox="0 0 69 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_286_135)">
                            <ellipse cx="34.2766" cy="31.5333" rx="28.2766" ry="29.5333" fill="white"></ellipse>
                        </g>
                        <ellipse cx="34.6649" cy="21.9784" rx="4.34313" ry="4.34314" fill="#D8F1FF"></ellipse>
                        <ellipse cx="46.8256" cy="23.7157" rx="2.60588" ry="2.60588" fill="#D8F1FF"></ellipse>
                        <ellipse cx="22.5038" cy="23.7157" rx="2.60588" ry="2.60588" fill="#D8F1FF"></ellipse>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M37.3088 36.4446C37.7323 36.8064 37.7812 37.4419 37.4182 37.8642L34.3886 41.388C34.0423 41.7909 33.4418 41.8566 33.016 41.5382L30.9963 40.028C30.5501 39.6944 30.4597 39.0633 30.7943 38.6185C31.129 38.1737 31.762 38.0835 32.2081 38.4171L33.4709 39.3613L35.8849 36.5537C36.2478 36.1315 36.8852 36.0827 37.3088 36.4446V36.4446Z" fill="#014E78"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3017 19.8357C24.6771 19.8357 26.6028 21.7946 26.6028 24.211C26.6028 25.479 26.0726 26.6209 25.2254 27.4201C25.3288 27.4636 25.4305 27.5079 25.5303 27.5528C26.1884 27.8489 26.7677 28.2399 27.2724 28.701C27.7705 28.2364 28.324 27.8215 28.9357 27.4695C29.4823 27.1547 30.0771 26.844 30.6964 26.5748C29.2503 25.5002 28.3112 23.7638 28.3112 21.8046C28.3112 18.5425 30.9149 15.8979 34.1268 15.8979C37.3385 15.8979 39.9423 18.5425 39.9423 21.8046C39.9423 23.7638 39.0031 25.5002 37.5572 26.5748C38.1763 26.844 38.7713 27.1547 39.3177 27.4695C39.9295 27.8215 40.483 28.2364 40.981 28.701C41.4857 28.2399 42.065 27.8489 42.7231 27.5528C42.8229 27.5079 42.9245 27.4636 43.0278 27.4201C42.1807 26.621 41.6505 25.479 41.6505 24.211C41.6505 21.7946 43.5762 19.8357 45.9515 19.8357C48.3269 19.8357 50.2527 21.7946 50.2527 24.211C50.2527 25.479 49.7225 26.6209 48.8754 27.4201C48.9787 27.4636 49.0803 27.5079 49.1803 27.5528C51.7447 28.7069 53.1137 31.301 53.5353 33.8743C53.7666 35.2862 52.6946 36.5713 51.2853 36.5713H44.3664C44.0735 37.6876 43.0724 38.5402 41.844 38.5402H40.9116C40.9116 42.346 37.8739 45.4313 34.1268 45.4313C30.3796 45.4313 27.342 42.346 27.342 38.5402H26.4095C25.181 38.5402 24.1799 37.6876 23.887 36.5713H16.968C15.5588 36.5713 14.4867 35.2862 14.718 33.8743C15.1397 31.301 16.5087 28.7069 19.0732 27.5528C19.173 27.5079 19.2747 27.4636 19.378 27.4201C18.5308 26.621 18.0006 25.479 18.0006 24.211C18.0006 21.7946 19.9263 19.8357 22.3017 19.8357ZM22.3017 26.6174C23.6037 26.6174 24.6643 25.543 24.6643 24.211C24.6643 22.8791 23.6037 21.8046 22.3017 21.8046C20.9998 21.8046 19.9392 22.8791 19.9392 24.211C19.9392 25.543 20.9998 26.6174 22.3017 26.6174ZM22.3018 28.6957C21.6058 28.6957 20.7448 28.954 19.8585 29.3529C18.0904 30.1488 16.9865 32.0231 16.6302 34.1976C16.5955 34.4094 16.7564 34.6024 16.968 34.6024H24.0156C24.3956 33.0257 25.0379 31.4913 25.9828 30.174C25.6157 29.8371 25.2026 29.5589 24.745 29.3529C23.8587 28.954 22.9977 28.6957 22.3018 28.6957ZM45.9515 26.6174C47.2536 26.6174 48.3142 25.543 48.3142 24.211C48.3142 22.8791 47.2536 21.8046 45.9515 21.8046C44.6496 21.8046 43.589 22.8791 43.589 24.211C43.589 25.543 44.6496 26.6174 45.9515 26.6174ZM45.9517 28.6957C45.2558 28.6957 44.3947 28.954 43.5084 29.3529C43.0507 29.5589 42.6378 29.8371 42.2707 30.174C43.2155 31.4913 43.8579 33.0257 44.2379 34.6024H51.2853C51.497 34.6024 51.6579 34.4094 51.6232 34.1976C51.2669 32.0231 50.1629 30.1488 48.3948 29.3529C47.5085 28.954 46.6476 28.6957 45.9517 28.6957ZM34.1268 25.7424C36.2679 25.7424 38.0038 23.9794 38.0038 21.8046C38.0038 19.6298 36.2679 17.8668 34.1268 17.8668C31.9855 17.8668 30.2497 19.6298 30.2497 21.8046C30.2497 23.9794 31.9855 25.7424 34.1268 25.7424ZM34.1268 27.7113C32.8919 27.7113 31.358 28.338 29.8916 29.1822C29.3934 29.4691 28.9387 29.8135 28.5272 30.2059C28.0275 30.6825 27.5913 31.2299 27.2176 31.8314C26.6989 32.666 26.3007 33.6048 26.0202 34.6024C25.9134 34.9824 25.8237 35.3708 25.7509 35.7652C25.6735 36.1842 25.9899 36.5713 26.4095 36.5713H27.6229C28.457 33.7249 31.0533 31.6491 34.1268 31.6491C37.2003 31.6491 39.7965 33.7249 40.6307 36.5713H41.844C42.2635 36.5713 42.5798 36.1842 42.5027 35.7652C42.4298 35.3708 42.3401 34.9824 42.2332 34.6024C41.9527 33.6048 41.5546 32.666 41.0358 31.8312C40.6621 31.2299 40.2259 30.6825 39.7262 30.2059C39.3146 29.8135 38.86 29.4691 38.3618 29.1822C36.8954 28.338 35.3616 27.7113 34.1268 27.7113ZM34.1268 43.4624C36.8033 43.4624 38.9731 41.2586 38.9731 38.5402C38.9731 37.84 38.8292 37.1741 38.5698 36.5713C37.822 34.8327 36.1141 33.6179 34.1268 33.6179C32.1394 33.6179 30.4316 34.8327 29.6837 36.5713C29.4244 37.1741 29.2805 37.84 29.2805 38.5402C29.2805 41.2586 31.4503 43.4624 34.1268 43.4624Z" fill="#014E78"></path>
                        <defs>
                            <filter id="filter0_d_286_135" x="0" y="0" width="68.5532" height="71.0664" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                <feOffset dy="4"></feOffset>
                                <feGaussianBlur stdDeviation="3"></feGaussianBlur>
                                <feComposite in2="hardAlpha" operator="out"></feComposite>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_286_135"></feBlend>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_286_135" result="shape"></feBlend>
                            </filter>
                        </defs>
                    </svg>
                </Grid>
                <Typography
                    fontSize='0.8rem'
                    fontWeight='bold'
                    color='primary.main'
                    fontFamily='Consolas'
                >
                    Select a Specialist Doctor
                </Typography>
            </CardContent>
        </Card>
    );
}