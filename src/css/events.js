const styles = {
    container: {
      padding: '40px 80px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    //   backgroundColor: '#BCAAA4',
      fontFamily: 'Arial, sans-serif'
    },
    cardWrap: {
      margin: '10px',
      transformStyle: 'preserve-3d',
      cursor: 'pointer'
    },
    card: {
      position: 'relative',
      width: '240px',
      height: '320px',
      backgroundColor: '#333',
      overflow: 'hidden',
      borderRadius: '10px',
      transition: 'all 0.3s ease-out'
    },
    cardBg: {
      position: 'absolute',
      top: '-20px',
      left: '-20px',
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      transition: 'all 0.3s ease-out'
    },
    cardInfo: {
      padding: '20px',
      position: 'absolute',
      bottom: 0,
      color: '#fff',
      background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
      width: '100%',
      transition: 'all 0.3s ease-out'
    },
    cardInfoTitle: {
      fontSize: '28px',
      margin: '0 0 10px 0',
      textShadow: 'rgba(0, 0, 0, 0.5) 0 3px 5px'
    },
    cardInfoDescription: {
      fontSize: '14px',
      lineHeight: '1.4',
      margin: 0,
      transition: 'opacity 0.3s ease-out'
    }
  };

  export default styles;