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
      margin: '20px',
      transformStyle: 'preserve-3d',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    card: {
      position: 'relative',
      width: '300px',
      height: '400px',
      backgroundColor: '#333',
      overflow: 'hidden',
      borderRadius: '10px',
      transition: 'all 0.3s ease-out',
      cursor: 'pointer',
      border: '2px solid rgba(255, 255, 255, 0.8)',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.3)'
    },
    cardBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      transition: 'all 0.3s ease-out'
    },
    cardInfo: {
      padding: '25px',
      position: 'absolute',
      bottom: 0,
      color: '#fff',
      background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.7))',
      width: '100%',
      transition: 'all 0.3s ease-out'
    },
    cardInfoTitle: {
      fontSize: '32px',
      margin: '0 0 12px 0',
      textShadow: 'rgba(0, 0, 0, 0.5) 0 3px 5px'
    },
    cardInfoDescription: {
      fontSize: '16px',
      lineHeight: '1.5',
      margin: 0,
      transition: 'opacity 0.3s ease-out'
    }
  };

  export default styles;