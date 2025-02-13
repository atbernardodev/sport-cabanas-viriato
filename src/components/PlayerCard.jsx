import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const positionColors = {
  'Guarda-Redes': '#FFD700',
  'Defesa': '#4CAF50',
  'Médio': '#2196F3',
  'Avançado': '#f44336'
};

function PlayerCard({ player }) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '280px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#1E1E1E',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(45deg, ${positionColors[player.position]} 0%, transparent 60%)`,
            opacity: 0.1,
            zIndex: 1,
          },
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.03,
            backgroundImage: 'url("/images/pattern.png")',
            backgroundSize: '300px',
            mixBlendMode: 'overlay',
          }}
        />

        {/* Player Number */}
        <Typography
          variant="h1"
          sx={{
            position: 'absolute',
            right: -15,
            top: -15,
            fontSize: '140px',
            fontWeight: 900,
            color: 'rgba(255,255,255,0.03)',
            zIndex: 0,
          }}
        >
          {player.number}
        </Typography>

        {/* Player Image Container */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            right: '5%',
            width: '45%',
            height: '75%',
            transform: 'translateY(-50%)',
            zIndex: 1,
          }}
        >
          <Box
            component="img"
            src={player.image}
            alt={player.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center right',
              filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.3))',
              opacity: 0.9,
            }}
          />
        </Box>

        {/* Player Info */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            height: '100%',
            width: '50%',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Top Section */}
          <Box>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: positionColors[player.position],
                color: 'white',
                padding: '3px 10px',
                borderRadius: '10px',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                mb: 1.5,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              {player.position}
            </Box>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                fontWeight: 900,
                lineHeight: 1.1,
                mb: 1,
                fontSize: '1.25rem',
              }}
            >
              {player.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                mb: 3,
              }}
            >
              <Box
                component="img"
                // src={`https://flagcdn.com/w20/${player.nationality.toLowerCase()}.png`}
                src={`https://flagcdn.com/w20/pt.png`}
                alt={player.nationality}
                sx={{
                  width: 20,
                  height: 'auto',
                  borderRadius: '2px',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.875rem',
                }}
              >
                {player.nationality}
              </Typography>
            </Box>
          </Box>

          {/* Stats Section */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1.5,
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: positionColors[player.position],
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                }}
              >
                {player.appearances}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Jogos
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: positionColors[player.position],
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                }}
              >
                {player.goals}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Golos
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: positionColors[player.position],
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                }}
              >
                {player.assists}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Assists
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default PlayerCard;
