import { Box, Typography } from '@mui/material';

const PostresCard = ({ image, name, price }) => {
    const cardStyles = {
    width: '80%', 
    maxWidth: '210px',
    height: 'auto', 
    padding: '16px',
    borderRadius: '20px',
    backgroundColor: '#FFFFFF',
    boxShadow: [
        '0px 2.77px 2.21px 0px #AE967205',
        '0px 6.65px 5.32px 0px #AE967207',
        '0px 12.52px 10.02px 0px #AE967209',
        '0px 22.34px 17.87px 0px #AE96720B',
        '0px 41.78px 33.42px 0px #AE96720D',
        '0px 100px 80px 0px #AE967212',
    ].join(','),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    };

    const imageStyles = {
    width: '100%',
    height: 'auto', 
    borderRadius: '10px',
    marginBottom: '8px',
    };

    const nameStyles = {
    width: '100%',
    height: 'auto',
    fontFamily: 'Inter',
    fontSize: '14px', 
    lineHeight: '16px', 
    letterSpacing: '0em',
    textAlign: 'center',
    marginBottom: '8px',
    };

    const priceStyles = {
    width: '100%',
    height: 'auto',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '14px',
    letterSpacing: '0em',
    textAlign: 'center',
    };

    return (
    <div>
        <Box sx={cardStyles}>
        <img src={image} alt={name} style={imageStyles} />
        <Typography sx={nameStyles}>{name}</Typography>
        <Typography sx={priceStyles}>{price}</Typography>
        </Box>
    </div>
    );
};

export default PostresCard;
